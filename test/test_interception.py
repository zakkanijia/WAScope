import sys
import os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import unittest
from unittest.mock import MagicMock
import Interception
import requests

class TestInterception(unittest.TestCase):
    def test_load_option(self):
        """测试拦截器模块选项加载 (load)"""
        # mock a mitmproxy loader
        loader_mock = MagicMock()
        Interception.load(loader_mock)
        # Verify that add_option is called with correct parameters
        loader_mock.add_option.assert_called_once_with(
            name="package", typespec=str, default='no input package', help="app package"
        )

    def test_download(self,path,folder):
        """测试下载模块 (load)"""
        requests.download_source(path,folder)

if __name__ == '__main__':
    unittest.main()
