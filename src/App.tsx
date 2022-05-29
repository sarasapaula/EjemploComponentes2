import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
  IonMenu,
  IonButton,
  IonPage,
  IonHeader,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonToolbar,IonMenuButton
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { bookmark, checkbox, ellipse, menu, square, triangle } from 'ionicons/icons';
import Tab5 from './pages/Tab5';
import Tab6 from './pages/Tab6';
import Tab7 from './pages/Tab7';
import Tab8 from './pages/Tab8';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/tab5">
            <Tab5 />
          </Route>
          <Route path="/tab6">
            <Tab6 />
          </Route>
          <Route path="/tab7">
            <Tab7 />
          </Route>
          <Route path="/tab8">
            <Tab8 />
          </Route>
          
          <Route exact path="/">
            <Redirect to="/tab5" />
          </Route>          
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab5" href="/tab5">
            <IonIcon icon={checkbox} />
            <IonLabel>Check</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab6" href="/tab6">
            <IonIcon icon={bookmark} />
            <IonLabel>Chip</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab7" href="/tab7">
            <IonIcon icon={bookmark} />
            <IonLabel>List</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab8" href="/tab8">
            <IonIcon icon={bookmark} />
            <IonLabel>Progress</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>

  </IonApp>
);

export default App;
