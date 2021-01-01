cat /database/elections.sql.gz.part* > /database/elections.sql.gz
cat /database/elections.sql.gz | gunzip | psql elections -U admin