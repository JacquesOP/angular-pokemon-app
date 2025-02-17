import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditPokemonComponent } from './edit-pokemon.component';

describe('EditPokemonComponent', () => {
  let component: EditPokemonComponent;
  let fixture: ComponentFixture<EditPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditPokemonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
