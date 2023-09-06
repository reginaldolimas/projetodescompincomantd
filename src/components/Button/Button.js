import { Space } from 'antd';
import ButtonAntD from 'antd/Button';

export const Button = ({ loading, label, loadingLabel, ...buttonProps}) => {
    return (
        <Space wrap>
            <ButtonAntD {...buttonProps} type="primary">{loading ? loadingLabel : label}</ButtonAntD>
        </Space>
    )
}