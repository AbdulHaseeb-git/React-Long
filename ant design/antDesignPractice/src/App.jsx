import './App.css';
import { Button, FloatButton, Flex ,Typography, Divider } from 'antd';
import {CaretUpOutlined} from '@ant-design/icons';
function App() {
const {Title} = Typography;
  return (
    <>
    <Flex>
    <Button size='large' style={{backgroundColor:"orange" , color:"white" , position:"relative"}}  type="dashed"  icon={<CaretUpOutlined style={{position:"absolute",right:"40%",top:"35%"}} spin/>} block href='www.youtube.com'>Google</Button>
    <FloatButton type='primary' onClick={() => console.log('onClick')} />

    </Flex>
    <Divider dashed/>
    <Divider dashed/>
    <Title>H1 : Antd</Title>
    <Title level={2}>H2 : Antd</Title>
    <Title level={3}>H3 : Antd</Title>
    <Title level={4}>H4 : Antd</Title>
    <Title level={5}>H5 : Antd</Title>
    </>
  )
}

export default App
