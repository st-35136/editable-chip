import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ViewChild
} from '@angular/core';
import {MatInput, MatInputModule} from '@angular/material/input';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ClickOutsideDirective} from '../../directives/click-outside.directive';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';

@Component({
  selector: 'editable-chip-input',
  templateUrl: './editable-chip-input.component.html',
  styleUrls: ['./editable-chip-input.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, ClickOutsideDirective, MatIcon, MatIconButton],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditableChipInputComponent implements AfterViewInit, OnChanges {
  @Input() value: string = '';
  @Output() submit = new EventEmitter<string>();
  @Output() cancel = new EventEmitter<void>();

  @ViewChild(MatInput, { static: false }) matInput: MatInput;

  readonly control = new FormControl();

  constructor() { }

  public ngOnChanges(): void {
    this.control.setValue(this.value || '');
  }

  public ngAfterViewInit(): void {
    this.matInput.focus();
  }

  public onSubmit(): void {
    const newValue = this.control.value.trim();
    if (newValue && newValue !== this.value) {
      this.submit.emit(newValue);
    } else {
      this.cancel.emit();
    }
  }

  public onCancel(): void {
    this.cancel.emit();
  }

  public onClick(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
  }
}
