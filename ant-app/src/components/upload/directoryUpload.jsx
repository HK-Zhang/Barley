import React from 'react';
import { Upload, Button, Icon } from 'antd';
import { updateLocale } from 'moment';

const DirectoryUpload = () => (
    <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" directory>
        <Button>
            <Icon type="upload" /> Upload Directory
    </Button>
    </Upload>
);

export default DirectoryUpload;