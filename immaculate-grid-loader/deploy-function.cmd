gcloud functions deploy immaculate-grid-updater ^
    --gen2 ^
    --runtime=python312 ^
    --region=us-central1 ^
    --source=. ^
    --entry-point=update_grid_function ^
    --trigger-http ^
    --allow-unauthenticated