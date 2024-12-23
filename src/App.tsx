import { TabView, TabPanel } from 'primereact/tabview';

import Calculator from './Calculator';
import TextToShader from './TextToShader';

function App() {

  return (
    <>
      <TabView>
          <TabPanel header="Rust Calculator">
              <Calculator />
          </TabPanel>
          <TabPanel header="Text-to-Shader">
              <TextToShader />
          </TabPanel>
      </TabView>
    </>
  )
}

export default App
