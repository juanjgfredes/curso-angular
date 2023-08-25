import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { Region, SmallCountry } from '../../interfaces/country.interface';
import { filter, map, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {

  public myForm: FormGroup = this.fb.group({
    region: ["", Validators.required ],
    country: ["", Validators.required ],
    border: ["", Validators.required ],
  });

  public smallCountries: SmallCountry[] = [];
  public countriesBorders: SmallCountry[] = [];

  constructor(
    private fb: FormBuilder,
    private countryService: CountryService
    ) {}


  ngOnInit(): void {
    this.onRegionChange();
    this.onCountryChange();
  }

  get regions(): Region[] {
    return this.countryService.regions;
  }


  onRegionChange(): void {
    this.myForm.get("region")!.valueChanges
    .pipe(
      tap( () => this.myForm.get("country")!.setValue("") ),
      switchMap( region => this.countryService.getCountriesByRegion(region) )
    )
    .subscribe( countries => {
      this.smallCountries = countries;
    })
  }

  onCountryChange(): void {
    this.myForm.get("country")!.valueChanges
    .pipe(
      tap( () => this.myForm.get("border")!.setValue("") ),
      filter( (value: string) => value.length > 0),
      switchMap( alphaCode => this.countryService.getCountryFromAphaCode(alphaCode) ),
      switchMap( country => this.countryService.getCountriesFromBorders( country.borders ) )
    )
    .subscribe( countries => {
      this.countriesBorders = countries;
    })
  }

}
