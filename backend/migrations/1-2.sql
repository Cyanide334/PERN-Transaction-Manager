create table if not exists transactions (
    id serial primary key, -- would much rather prefer a uuid v4 based id but for simplicity's sake
    amount_cents integer not null check (amount_cents > 0), -- store in cents
    type varchar(10) not null check (type in ('credit', 'debit')),
    description text,
    account_number varchar(20) not null, -- in practice this would be a foreign key
    created_at timestamp default now(),
    updated_at timestamp default now()
);
