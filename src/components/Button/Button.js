import { ConfigProvider, Space } from 'antd';
import { Button as ButtonAntD } from 'antd';

import { Spin } from '../Spin/Spin';

export const Button = ({ loading, label, loadingLabel, ...buttonProps }) => {
    return (
        <Space wrap>
            <ConfigProvider
                theme={{
                    components: {
                        Spin: {
                            colorPrimary: '#FFFFFF',
                            algorithm: true, // Enable algorithm
                        }
                    },
                }}
            >
                <ButtonAntD {...buttonProps} type="primary">
                    {loading && (
                        <>
                            <Spin />
                        </>
                    )}
                    {loading ? loadingLabel : label}
                </ButtonAntD>
            </ConfigProvider>
        </Space>

    )
}