import {Component} from '@angular/core';
import {EditableChipComponent} from '../core/components/editable-chip/editable-chip.component';

@Component({
  selector: 'app-root',
  imports: [EditableChipComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  chipValue = 'chip value';
  chipTooltip = 'double click to edit value';


  public onEdit(value: string): void {
    this.chipValue = value;
  }

  public onRemove(): void {

  }
}
