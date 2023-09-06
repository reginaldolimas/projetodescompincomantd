import { LoadingOutlined } from '@ant-design/icons';
import { Spin as SpinAntD } from 'antd';
const antIcon = (
    <>
            <LoadingOutlined
                style={{
                    fontSize: 24,
                }}
                spin
            />
    </>
);
export const Spin = () => <SpinAntD indicator={antIcon} />;
