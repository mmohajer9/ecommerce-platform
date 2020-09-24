from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class SettingsManagerConfig(AppConfig):
    name = 'settings_manager'
    verbose_name = _("Site Settings Manager")
    
