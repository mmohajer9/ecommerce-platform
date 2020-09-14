from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class AccountManagementConfig(AppConfig):
    name = 'account_management'
    verbose_name = _("Account Management")
