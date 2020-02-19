import { Component, ViewChild, OnInit, isDevMode } from '@angular/core';
import {
  ActionsMenuAction,
  AppComponent as LfAppComponent
} from '@lightweightform/bootstrap-theme';
import { LfStorage, LfFileStorage, LfUnloadAlert } from '@lightweightform/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hotel-reservation';

  actions: ActionsMenuAction[] = [
    {
      id: 'save',
      style: 'outline-secondary',
      icon: 'save',
      callback: () => this.save()
    },
    {
      id: 'load',
      style: 'outline-secondary',
      icon: 'folder-open',
      isDisabled: () => !this.lfFileStorage.loadIsSupported,
      callback: () => this.load()
    },
    {
      id: 'validate',
      style: 'outline-danger',
      icon: 'check-square-o',
      callback: () => this.lfApp.validate()
    },
    {
      id: 'submit',
      style: 'outline-success',
      icon: 'send',
      callback: () => this.submit()
    }
  ];

  @ViewChild(LfAppComponent) lfApp: LfAppComponent;

  constructor(
    public lfStorage: LfStorage,
    public lfFileStorage: LfFileStorage,
    public lfUnloadAlert: LfUnloadAlert
  ) {}

  ngOnInit() {
    if (!isDevMode()) {
      this.lfUnloadAlert.enable();
    }
  }

  async save(): Promise<void> {
    try {
      const dateStr = new Date().toISOString().replace(/[T:.]/g, '-');
      const fileName = `app-${dateStr}`;
      await this.lfFileStorage.saveToFile('/', fileName);
      this.lfStorage.setPristine();
    } catch (err) {
      console.error('Error saving file:', err);
    }
  }

  async load(): Promise<void> {
    try {
      await this.lfFileStorage.loadFromFile('/');
      this.lfStorage.setTouched('/', true);
    } catch (err) {
      console.error('Error loading file:', err);
    }
  }

  submit(): void {
    if (!this.lfStorage.hasErrors()) {
      const appJSON = JSON.stringify(this.lfStorage.getAsJS());
      alert(appJSON); // Do something with the JSON
    } else {
      this.lfApp.validate();
    }
  }
}
