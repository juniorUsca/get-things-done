CREATE TABLE users
(
    iduser serial,
    name character varying(45),
    email character varying(40) ,
	password character varying(45),	
    CONSTRAINT users_pkey PRIMARY KEY (iduser),
	CONSTRAINT users_email UNIQUE (email)
);

CREATE TABLE incubadura
(
    idincubadora serial,
	iduser integer,
	category character varying(50),
    descripcion character varying(50),
    deadline timestamp without time zone DEFAULT now(),
	difficult_level character varying(40) ,
	status_done character varying(40) ,
	created_at timestamp without time zone DEFAULT now(),
	update_at timestamp without time zone ,
	CONSTRAINT incubadura_tareas_pkey PRIMARY KEY (idincubadora),
	CONSTRAINT user_fkey FOREIGN KEY (iduser)
      REFERENCES users (iduser) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
	
) ;

CREATE TABLE next_actions
(
    idnext serial,
	iduser integer,
	category character varying(50),
    descripcion character varying(50),
    status_done character varying(40) ,
	created_at timestamp without time zone DEFAULT now(),
	update_at timestamp without time zone,
	CONSTRAINT next_actions_pkey PRIMARY KEY (idnext),
	CONSTRAINT user_fkey FOREIGN KEY (iduser)
      REFERENCES users (iduser) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
) ;

CREATE TABLE calendar
(
    idcalendar serial,
    iduser integer,
	category character varying(50),
    descripcion character varying(50),
	date timestamp without time zone DEFAULT now(),
    start_time timestamp without time zone DEFAULT now(),
	final_time timestamp without time zone ,
	created_at timestamp without time zone DEFAULT now(),
	update_at timestamp without time zone,
    CONSTRAINT calendar_pkey PRIMARY KEY (idcalendar),
	CONSTRAINT user_fkey FOREIGN KEY (iduser)
      REFERENCES users (iduser) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
) ;


CREATE TABLE ticklerfile
(
    idtickerfile serial,
	iduser integer,
	category character varying(50),
    descripcion character varying(50),
	date_reminder timestamp without time zone DEFAULT now(),
	status_done character varying(40) ,
	created_at timestamp without time zone DEFAULT now(),
	update_at timestamp without time zone,
	CONSTRAINT ticklerfile_pkey PRIMARY KEY (idtickerfile),
	CONSTRAINT user_fkey FOREIGN KEY (iduser)
      REFERENCES users (iduser) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION	
) ;



CREATE TABLE inbox
(
    idinbox serial,
	iduser integer,
	category character varying(50),
    descripcion character varying(50),
	status_done character varying(40) ,
    created_at timestamp without time zone DEFAULT now(),
	update_at timestamp without time zone,
    CONSTRAINT inbox_pkey PRIMARY KEY (idinbox),
	CONSTRAINT user_fkey FOREIGN KEY (iduser)
      REFERENCES users (iduser) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION	
) ;

