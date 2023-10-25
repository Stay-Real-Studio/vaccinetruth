BEGIN;

-- Create user_points table if it doesn't exist
CREATE TABLE IF NOT EXISTS user_points (
  user_id UUID PRIMARY KEY,
  points INT DEFAULT 0
);

-- Insert migration record if it doesn't exist
INSERT INTO migrations (name) 
SELECT '20231025100500_add_user_points_table'
WHERE NOT EXISTS (
    SELECT 1 FROM migrations WHERE name = '20231025100500_add_user_points_table'
);

COMMIT;
