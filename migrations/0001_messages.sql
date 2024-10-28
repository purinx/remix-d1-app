-- Migration number: 0001 	 2024-10-28T05:08:36.087Z
CREATE TABLE `messages` (
	`id` integer PRIMARY KEY NOT NULL,
	`from` text NOT NULL,
	`body` text NOT NULL
);
