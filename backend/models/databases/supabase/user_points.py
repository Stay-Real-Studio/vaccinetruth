
from logger import get_logger
from models.databases.repository import Repository

logger = get_logger(__name__)


class UserPoints(Repository):
    def __init__(self, supabase_client):
        self.db = supabase_client

    def get_user_points(self, user_id):
        """
        Fetch the user settings from the database
        """

        user_points_response = (
            self.db.from_("user_points")
            .select("*")
            .filter("user_id", "eq", user_id)
            .execute()
        ).data

        if len(user_points_response) == 0:
            # Create the user settings
            user_points_response = (
                self.db.table("user_points")
                .insert({"user_id": str(user_id)})
                .execute()
            ).data

        if len(user_points_response) == 0:
            raise ValueError("User settings could not be created")

        user_points = user_points_response[0]

        return user_points
    
        
