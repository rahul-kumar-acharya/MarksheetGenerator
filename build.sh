cd ..
npm install
npm run build:css
cd marksheet
pip install -r ../requirements.txt
python manage.py collectstatic --noinput
python manage.py migrate
