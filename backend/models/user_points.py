from logger import get_logger
from models.databases.supabase.supabase import SupabaseDB
from models.settings import get_supabase_db
from models.user_identity import UserIdentity

logger = get_logger(__name__)


class UserPoints(UserIdentity):
    def __init__(self, **data):
        super().__init__(**data)

    @property
    def supabase_db(self) -> SupabaseDB:
        return get_supabase_db()

    def get_user_points(self):
        """
        Fetch the user request stats from the database
        """
        request = self.supabase_db.get_user_points(self.id)

        return request
