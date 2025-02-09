import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import {EditableChipInputComponent} from '../editable-chip-input/editable-chip-input.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'editable-chip',
  templateUrl: './editable-chip.component.html',
  styleUrls: ['./editable-chip.component.scss'],
  standalone: true,
  imports: [MatChipsModule, MatTooltipModule, EditableChipInputComponent, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditableChipComponent implements OnInit {
  @Input() value: string;
  @Input() tooltip: string;
  @Output() remove = new EventEmitter<void>();
  @Output() edit = new EventEmitter<string>();

  isInputVisible: boolean = false;

  constructor() { }

  public ngOnInit(): void {
  }

  public showInput(): void {
    this.isInputVisible = true;
  }

  public hideInput(): void {
    this.isInputVisible = false;
  }

  public onRemove(): void {
    this.remove.emit();
  }

  public onEdit(value: string): void {
    this.hideInput();
    this.edit.emit(value);
  }
}
