[bun-types](../README.md) / [Exports](../modules.md) / ["node:crypto"](node_crypto_.md) / constants

# Namespace: constants

["node:crypto"](node_crypto_.md).constants

## Table of contents

### Variables

- [ALPN\_ENABLED](node_crypto_.constants.md#alpn_enabled)
- [DH\_CHECK\_P\_NOT\_PRIME](node_crypto_.constants.md#dh_check_p_not_prime)
- [DH\_CHECK\_P\_NOT\_SAFE\_PRIME](node_crypto_.constants.md#dh_check_p_not_safe_prime)
- [DH\_NOT\_SUITABLE\_GENERATOR](node_crypto_.constants.md#dh_not_suitable_generator)
- [DH\_UNABLE\_TO\_CHECK\_GENERATOR](node_crypto_.constants.md#dh_unable_to_check_generator)
- [ENGINE\_METHOD\_ALL](node_crypto_.constants.md#engine_method_all)
- [ENGINE\_METHOD\_CIPHERS](node_crypto_.constants.md#engine_method_ciphers)
- [ENGINE\_METHOD\_DH](node_crypto_.constants.md#engine_method_dh)
- [ENGINE\_METHOD\_DIGESTS](node_crypto_.constants.md#engine_method_digests)
- [ENGINE\_METHOD\_DSA](node_crypto_.constants.md#engine_method_dsa)
- [ENGINE\_METHOD\_EC](node_crypto_.constants.md#engine_method_ec)
- [ENGINE\_METHOD\_NONE](node_crypto_.constants.md#engine_method_none)
- [ENGINE\_METHOD\_PKEY\_ASN1\_METHS](node_crypto_.constants.md#engine_method_pkey_asn1_meths)
- [ENGINE\_METHOD\_PKEY\_METHS](node_crypto_.constants.md#engine_method_pkey_meths)
- [ENGINE\_METHOD\_RAND](node_crypto_.constants.md#engine_method_rand)
- [ENGINE\_METHOD\_RSA](node_crypto_.constants.md#engine_method_rsa)
- [OPENSSL\_VERSION\_NUMBER](node_crypto_.constants.md#openssl_version_number)
- [POINT\_CONVERSION\_COMPRESSED](node_crypto_.constants.md#point_conversion_compressed)
- [POINT\_CONVERSION\_HYBRID](node_crypto_.constants.md#point_conversion_hybrid)
- [POINT\_CONVERSION\_UNCOMPRESSED](node_crypto_.constants.md#point_conversion_uncompressed)
- [RSA\_NO\_PADDING](node_crypto_.constants.md#rsa_no_padding)
- [RSA\_PKCS1\_OAEP\_PADDING](node_crypto_.constants.md#rsa_pkcs1_oaep_padding)
- [RSA\_PKCS1\_PADDING](node_crypto_.constants.md#rsa_pkcs1_padding)
- [RSA\_PKCS1\_PSS\_PADDING](node_crypto_.constants.md#rsa_pkcs1_pss_padding)
- [RSA\_PSS\_SALTLEN\_AUTO](node_crypto_.constants.md#rsa_pss_saltlen_auto)
- [RSA\_PSS\_SALTLEN\_DIGEST](node_crypto_.constants.md#rsa_pss_saltlen_digest)
- [RSA\_PSS\_SALTLEN\_MAX\_SIGN](node_crypto_.constants.md#rsa_pss_saltlen_max_sign)
- [RSA\_SSLV23\_PADDING](node_crypto_.constants.md#rsa_sslv23_padding)
- [RSA\_X931\_PADDING](node_crypto_.constants.md#rsa_x931_padding)
- [SSL\_OP\_ALL](node_crypto_.constants.md#ssl_op_all)
- [SSL\_OP\_ALLOW\_UNSAFE\_LEGACY\_RENEGOTIATION](node_crypto_.constants.md#ssl_op_allow_unsafe_legacy_renegotiation)
- [SSL\_OP\_CIPHER\_SERVER\_PREFERENCE](node_crypto_.constants.md#ssl_op_cipher_server_preference)
- [SSL\_OP\_CISCO\_ANYCONNECT](node_crypto_.constants.md#ssl_op_cisco_anyconnect)
- [SSL\_OP\_COOKIE\_EXCHANGE](node_crypto_.constants.md#ssl_op_cookie_exchange)
- [SSL\_OP\_CRYPTOPRO\_TLSEXT\_BUG](node_crypto_.constants.md#ssl_op_cryptopro_tlsext_bug)
- [SSL\_OP\_DONT\_INSERT\_EMPTY\_FRAGMENTS](node_crypto_.constants.md#ssl_op_dont_insert_empty_fragments)
- [SSL\_OP\_EPHEMERAL\_RSA](node_crypto_.constants.md#ssl_op_ephemeral_rsa)
- [SSL\_OP\_LEGACY\_SERVER\_CONNECT](node_crypto_.constants.md#ssl_op_legacy_server_connect)
- [SSL\_OP\_MICROSOFT\_BIG\_SSLV3\_BUFFER](node_crypto_.constants.md#ssl_op_microsoft_big_sslv3_buffer)
- [SSL\_OP\_MICROSOFT\_SESS\_ID\_BUG](node_crypto_.constants.md#ssl_op_microsoft_sess_id_bug)
- [SSL\_OP\_MSIE\_SSLV2\_RSA\_PADDING](node_crypto_.constants.md#ssl_op_msie_sslv2_rsa_padding)
- [SSL\_OP\_NETSCAPE\_CA\_DN\_BUG](node_crypto_.constants.md#ssl_op_netscape_ca_dn_bug)
- [SSL\_OP\_NETSCAPE\_CHALLENGE\_BUG](node_crypto_.constants.md#ssl_op_netscape_challenge_bug)
- [SSL\_OP\_NETSCAPE\_DEMO\_CIPHER\_CHANGE\_BUG](node_crypto_.constants.md#ssl_op_netscape_demo_cipher_change_bug)
- [SSL\_OP\_NETSCAPE\_REUSE\_CIPHER\_CHANGE\_BUG](node_crypto_.constants.md#ssl_op_netscape_reuse_cipher_change_bug)
- [SSL\_OP\_NO\_COMPRESSION](node_crypto_.constants.md#ssl_op_no_compression)
- [SSL\_OP\_NO\_QUERY\_MTU](node_crypto_.constants.md#ssl_op_no_query_mtu)
- [SSL\_OP\_NO\_SESSION\_RESUMPTION\_ON\_RENEGOTIATION](node_crypto_.constants.md#ssl_op_no_session_resumption_on_renegotiation)
- [SSL\_OP\_NO\_SSLv2](node_crypto_.constants.md#ssl_op_no_sslv2)
- [SSL\_OP\_NO\_SSLv3](node_crypto_.constants.md#ssl_op_no_sslv3)
- [SSL\_OP\_NO\_TICKET](node_crypto_.constants.md#ssl_op_no_ticket)
- [SSL\_OP\_NO\_TLSv1](node_crypto_.constants.md#ssl_op_no_tlsv1)
- [SSL\_OP\_NO\_TLSv1\_1](node_crypto_.constants.md#ssl_op_no_tlsv1_1)
- [SSL\_OP\_NO\_TLSv1\_2](node_crypto_.constants.md#ssl_op_no_tlsv1_2)
- [SSL\_OP\_PKCS1\_CHECK\_1](node_crypto_.constants.md#ssl_op_pkcs1_check_1)
- [SSL\_OP\_PKCS1\_CHECK\_2](node_crypto_.constants.md#ssl_op_pkcs1_check_2)
- [SSL\_OP\_SINGLE\_DH\_USE](node_crypto_.constants.md#ssl_op_single_dh_use)
- [SSL\_OP\_SINGLE\_ECDH\_USE](node_crypto_.constants.md#ssl_op_single_ecdh_use)
- [SSL\_OP\_SSLEAY\_080\_CLIENT\_DH\_BUG](node_crypto_.constants.md#ssl_op_ssleay_080_client_dh_bug)
- [SSL\_OP\_SSLREF2\_REUSE\_CERT\_TYPE\_BUG](node_crypto_.constants.md#ssl_op_sslref2_reuse_cert_type_bug)
- [SSL\_OP\_TLS\_BLOCK\_PADDING\_BUG](node_crypto_.constants.md#ssl_op_tls_block_padding_bug)
- [SSL\_OP\_TLS\_D5\_BUG](node_crypto_.constants.md#ssl_op_tls_d5_bug)
- [SSL\_OP\_TLS\_ROLLBACK\_BUG](node_crypto_.constants.md#ssl_op_tls_rollback_bug)
- [defaultCipherList](node_crypto_.constants.md#defaultcipherlist)
- [defaultCoreCipherList](node_crypto_.constants.md#defaultcorecipherlist)

## Variables

### ALPN\_ENABLED

• `Const` **ALPN\_ENABLED**: `number`

#### Defined in

[crypto.d.ts:159](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L159)

___

### DH\_CHECK\_P\_NOT\_PRIME

• `Const` **DH\_CHECK\_P\_NOT\_PRIME**: `number`

#### Defined in

[crypto.d.ts:156](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L156)

___

### DH\_CHECK\_P\_NOT\_SAFE\_PRIME

• `Const` **DH\_CHECK\_P\_NOT\_SAFE\_PRIME**: `number`

#### Defined in

[crypto.d.ts:155](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L155)

___

### DH\_NOT\_SUITABLE\_GENERATOR

• `Const` **DH\_NOT\_SUITABLE\_GENERATOR**: `number`

#### Defined in

[crypto.d.ts:158](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L158)

___

### DH\_UNABLE\_TO\_CHECK\_GENERATOR

• `Const` **DH\_UNABLE\_TO\_CHECK\_GENERATOR**: `number`

#### Defined in

[crypto.d.ts:157](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L157)

___

### ENGINE\_METHOD\_ALL

• `Const` **ENGINE\_METHOD\_ALL**: `number`

#### Defined in

[crypto.d.ts:153](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L153)

___

### ENGINE\_METHOD\_CIPHERS

• `Const` **ENGINE\_METHOD\_CIPHERS**: `number`

#### Defined in

[crypto.d.ts:149](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L149)

___

### ENGINE\_METHOD\_DH

• `Const` **ENGINE\_METHOD\_DH**: `number`

#### Defined in

[crypto.d.ts:146](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L146)

___

### ENGINE\_METHOD\_DIGESTS

• `Const` **ENGINE\_METHOD\_DIGESTS**: `number`

#### Defined in

[crypto.d.ts:150](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L150)

___

### ENGINE\_METHOD\_DSA

• `Const` **ENGINE\_METHOD\_DSA**: `number`

#### Defined in

[crypto.d.ts:145](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L145)

___

### ENGINE\_METHOD\_EC

• `Const` **ENGINE\_METHOD\_EC**: `number`

#### Defined in

[crypto.d.ts:148](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L148)

___

### ENGINE\_METHOD\_NONE

• `Const` **ENGINE\_METHOD\_NONE**: `number`

#### Defined in

[crypto.d.ts:154](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L154)

___

### ENGINE\_METHOD\_PKEY\_ASN1\_METHS

• `Const` **ENGINE\_METHOD\_PKEY\_ASN1\_METHS**: `number`

#### Defined in

[crypto.d.ts:152](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L152)

___

### ENGINE\_METHOD\_PKEY\_METHS

• `Const` **ENGINE\_METHOD\_PKEY\_METHS**: `number`

#### Defined in

[crypto.d.ts:151](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L151)

___

### ENGINE\_METHOD\_RAND

• `Const` **ENGINE\_METHOD\_RAND**: `number`

#### Defined in

[crypto.d.ts:147](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L147)

___

### ENGINE\_METHOD\_RSA

• `Const` **ENGINE\_METHOD\_RSA**: `number`

#### Defined in

[crypto.d.ts:144](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L144)

___

### OPENSSL\_VERSION\_NUMBER

• `Const` **OPENSSL\_VERSION\_NUMBER**: `number`

#### Defined in

[crypto.d.ts:94](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L94)

___

### POINT\_CONVERSION\_COMPRESSED

• `Const` **POINT\_CONVERSION\_COMPRESSED**: `number`

#### Defined in

[crypto.d.ts:172](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L172)

___

### POINT\_CONVERSION\_HYBRID

• `Const` **POINT\_CONVERSION\_HYBRID**: `number`

#### Defined in

[crypto.d.ts:174](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L174)

___

### POINT\_CONVERSION\_UNCOMPRESSED

• `Const` **POINT\_CONVERSION\_UNCOMPRESSED**: `number`

#### Defined in

[crypto.d.ts:173](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L173)

___

### RSA\_NO\_PADDING

• `Const` **RSA\_NO\_PADDING**: `number`

#### Defined in

[crypto.d.ts:162](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L162)

___

### RSA\_PKCS1\_OAEP\_PADDING

• `Const` **RSA\_PKCS1\_OAEP\_PADDING**: `number`

#### Defined in

[crypto.d.ts:163](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L163)

___

### RSA\_PKCS1\_PADDING

• `Const` **RSA\_PKCS1\_PADDING**: `number`

#### Defined in

[crypto.d.ts:160](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L160)

___

### RSA\_PKCS1\_PSS\_PADDING

• `Const` **RSA\_PKCS1\_PSS\_PADDING**: `number`

#### Defined in

[crypto.d.ts:165](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L165)

___

### RSA\_PSS\_SALTLEN\_AUTO

• `Const` **RSA\_PSS\_SALTLEN\_AUTO**: `number`

Causes the salt length for RSA_PKCS1_PSS_PADDING to be determined automatically when verifying a signature.

#### Defined in

[crypto.d.ts:171](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L171)

___

### RSA\_PSS\_SALTLEN\_DIGEST

• `Const` **RSA\_PSS\_SALTLEN\_DIGEST**: `number`

Sets the salt length for RSA_PKCS1_PSS_PADDING to the digest size when signing or verifying.

#### Defined in

[crypto.d.ts:167](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L167)

___

### RSA\_PSS\_SALTLEN\_MAX\_SIGN

• `Const` **RSA\_PSS\_SALTLEN\_MAX\_SIGN**: `number`

Sets the salt length for RSA_PKCS1_PSS_PADDING to the maximum permissible value when signing data.

#### Defined in

[crypto.d.ts:169](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L169)

___

### RSA\_SSLV23\_PADDING

• `Const` **RSA\_SSLV23\_PADDING**: `number`

#### Defined in

[crypto.d.ts:161](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L161)

___

### RSA\_X931\_PADDING

• `Const` **RSA\_X931\_PADDING**: `number`

#### Defined in

[crypto.d.ts:164](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L164)

___

### SSL\_OP\_ALL

• `Const` **SSL\_OP\_ALL**: `number`

Applies multiple bug workarounds within OpenSSL. See https://www.openssl.org/docs/man1.0.2/ssl/SSL_CTX_set_options.html for detail.

#### Defined in

[crypto.d.ts:96](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L96)

___

### SSL\_OP\_ALLOW\_UNSAFE\_LEGACY\_RENEGOTIATION

• `Const` **SSL\_OP\_ALLOW\_UNSAFE\_LEGACY\_RENEGOTIATION**: `number`

Allows legacy insecure renegotiation between OpenSSL and unpatched clients or servers. See https://www.openssl.org/docs/man1.0.2/ssl/SSL_CTX_set_options.html.

#### Defined in

[crypto.d.ts:98](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L98)

___

### SSL\_OP\_CIPHER\_SERVER\_PREFERENCE

• `Const` **SSL\_OP\_CIPHER\_SERVER\_PREFERENCE**: `number`

Attempts to use the server's preferences instead of the client's when selecting a cipher. See https://www.openssl.org/docs/man1.0.2/ssl/SSL_CTX_set_options.html.

#### Defined in

[crypto.d.ts:100](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L100)

___

### SSL\_OP\_CISCO\_ANYCONNECT

• `Const` **SSL\_OP\_CISCO\_ANYCONNECT**: `number`

Instructs OpenSSL to use Cisco's "speshul" version of DTLS_BAD_VER.

#### Defined in

[crypto.d.ts:102](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L102)

___

### SSL\_OP\_COOKIE\_EXCHANGE

• `Const` **SSL\_OP\_COOKIE\_EXCHANGE**: `number`

Instructs OpenSSL to turn on cookie exchange.

#### Defined in

[crypto.d.ts:104](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L104)

___

### SSL\_OP\_CRYPTOPRO\_TLSEXT\_BUG

• `Const` **SSL\_OP\_CRYPTOPRO\_TLSEXT\_BUG**: `number`

Instructs OpenSSL to add server-hello extension from an early version of the cryptopro draft.

#### Defined in

[crypto.d.ts:106](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L106)

___

### SSL\_OP\_DONT\_INSERT\_EMPTY\_FRAGMENTS

• `Const` **SSL\_OP\_DONT\_INSERT\_EMPTY\_FRAGMENTS**: `number`

Instructs OpenSSL to disable a SSL 3.0/TLS 1.0 vulnerability workaround added in OpenSSL 0.9.6d.

#### Defined in

[crypto.d.ts:108](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L108)

___

### SSL\_OP\_EPHEMERAL\_RSA

• `Const` **SSL\_OP\_EPHEMERAL\_RSA**: `number`

Instructs OpenSSL to always use the tmp_rsa key when performing RSA operations.

#### Defined in

[crypto.d.ts:110](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L110)

___

### SSL\_OP\_LEGACY\_SERVER\_CONNECT

• `Const` **SSL\_OP\_LEGACY\_SERVER\_CONNECT**: `number`

Allows initial connection to servers that do not support RI.

#### Defined in

[crypto.d.ts:112](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L112)

___

### SSL\_OP\_MICROSOFT\_BIG\_SSLV3\_BUFFER

• `Const` **SSL\_OP\_MICROSOFT\_BIG\_SSLV3\_BUFFER**: `number`

#### Defined in

[crypto.d.ts:113](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L113)

___

### SSL\_OP\_MICROSOFT\_SESS\_ID\_BUG

• `Const` **SSL\_OP\_MICROSOFT\_SESS\_ID\_BUG**: `number`

#### Defined in

[crypto.d.ts:114](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L114)

___

### SSL\_OP\_MSIE\_SSLV2\_RSA\_PADDING

• `Const` **SSL\_OP\_MSIE\_SSLV2\_RSA\_PADDING**: `number`

Instructs OpenSSL to disable the workaround for a man-in-the-middle protocol-version vulnerability in the SSL 2.0 server implementation.

#### Defined in

[crypto.d.ts:116](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L116)

___

### SSL\_OP\_NETSCAPE\_CA\_DN\_BUG

• `Const` **SSL\_OP\_NETSCAPE\_CA\_DN\_BUG**: `number`

#### Defined in

[crypto.d.ts:117](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L117)

___

### SSL\_OP\_NETSCAPE\_CHALLENGE\_BUG

• `Const` **SSL\_OP\_NETSCAPE\_CHALLENGE\_BUG**: `number`

#### Defined in

[crypto.d.ts:118](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L118)

___

### SSL\_OP\_NETSCAPE\_DEMO\_CIPHER\_CHANGE\_BUG

• `Const` **SSL\_OP\_NETSCAPE\_DEMO\_CIPHER\_CHANGE\_BUG**: `number`

#### Defined in

[crypto.d.ts:119](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L119)

___

### SSL\_OP\_NETSCAPE\_REUSE\_CIPHER\_CHANGE\_BUG

• `Const` **SSL\_OP\_NETSCAPE\_REUSE\_CIPHER\_CHANGE\_BUG**: `number`

#### Defined in

[crypto.d.ts:120](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L120)

___

### SSL\_OP\_NO\_COMPRESSION

• `Const` **SSL\_OP\_NO\_COMPRESSION**: `number`

Instructs OpenSSL to disable support for SSL/TLS compression.

#### Defined in

[crypto.d.ts:122](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L122)

___

### SSL\_OP\_NO\_QUERY\_MTU

• `Const` **SSL\_OP\_NO\_QUERY\_MTU**: `number`

#### Defined in

[crypto.d.ts:123](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L123)

___

### SSL\_OP\_NO\_SESSION\_RESUMPTION\_ON\_RENEGOTIATION

• `Const` **SSL\_OP\_NO\_SESSION\_RESUMPTION\_ON\_RENEGOTIATION**: `number`

Instructs OpenSSL to always start a new session when performing renegotiation.

#### Defined in

[crypto.d.ts:125](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L125)

___

### SSL\_OP\_NO\_SSLv2

• `Const` **SSL\_OP\_NO\_SSLv2**: `number`

#### Defined in

[crypto.d.ts:126](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L126)

___

### SSL\_OP\_NO\_SSLv3

• `Const` **SSL\_OP\_NO\_SSLv3**: `number`

#### Defined in

[crypto.d.ts:127](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L127)

___

### SSL\_OP\_NO\_TICKET

• `Const` **SSL\_OP\_NO\_TICKET**: `number`

#### Defined in

[crypto.d.ts:128](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L128)

___

### SSL\_OP\_NO\_TLSv1

• `Const` **SSL\_OP\_NO\_TLSv1**: `number`

#### Defined in

[crypto.d.ts:129](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L129)

___

### SSL\_OP\_NO\_TLSv1\_1

• `Const` **SSL\_OP\_NO\_TLSv1\_1**: `number`

#### Defined in

[crypto.d.ts:130](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L130)

___

### SSL\_OP\_NO\_TLSv1\_2

• `Const` **SSL\_OP\_NO\_TLSv1\_2**: `number`

#### Defined in

[crypto.d.ts:131](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L131)

___

### SSL\_OP\_PKCS1\_CHECK\_1

• `Const` **SSL\_OP\_PKCS1\_CHECK\_1**: `number`

#### Defined in

[crypto.d.ts:132](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L132)

___

### SSL\_OP\_PKCS1\_CHECK\_2

• `Const` **SSL\_OP\_PKCS1\_CHECK\_2**: `number`

#### Defined in

[crypto.d.ts:133](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L133)

___

### SSL\_OP\_SINGLE\_DH\_USE

• `Const` **SSL\_OP\_SINGLE\_DH\_USE**: `number`

Instructs OpenSSL to always create a new key when using temporary/ephemeral DH parameters.

#### Defined in

[crypto.d.ts:135](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L135)

___

### SSL\_OP\_SINGLE\_ECDH\_USE

• `Const` **SSL\_OP\_SINGLE\_ECDH\_USE**: `number`

Instructs OpenSSL to always create a new key when using temporary/ephemeral ECDH parameters.

#### Defined in

[crypto.d.ts:137](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L137)

___

### SSL\_OP\_SSLEAY\_080\_CLIENT\_DH\_BUG

• `Const` **SSL\_OP\_SSLEAY\_080\_CLIENT\_DH\_BUG**: `number`

#### Defined in

[crypto.d.ts:138](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L138)

___

### SSL\_OP\_SSLREF2\_REUSE\_CERT\_TYPE\_BUG

• `Const` **SSL\_OP\_SSLREF2\_REUSE\_CERT\_TYPE\_BUG**: `number`

#### Defined in

[crypto.d.ts:139](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L139)

___

### SSL\_OP\_TLS\_BLOCK\_PADDING\_BUG

• `Const` **SSL\_OP\_TLS\_BLOCK\_PADDING\_BUG**: `number`

#### Defined in

[crypto.d.ts:140](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L140)

___

### SSL\_OP\_TLS\_D5\_BUG

• `Const` **SSL\_OP\_TLS\_D5\_BUG**: `number`

#### Defined in

[crypto.d.ts:141](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L141)

___

### SSL\_OP\_TLS\_ROLLBACK\_BUG

• `Const` **SSL\_OP\_TLS\_ROLLBACK\_BUG**: `number`

Instructs OpenSSL to disable version rollback attack detection.

#### Defined in

[crypto.d.ts:143](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L143)

___

### defaultCipherList

• `Const` **defaultCipherList**: `string`

Specifies the active default cipher list used by the current Node.js process  (colon-separated values).

#### Defined in

[crypto.d.ts:178](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L178)

___

### defaultCoreCipherList

• `Const` **defaultCoreCipherList**: `string`

Specifies the built-in default cipher list used by Node.js (colon-separated values).

#### Defined in

[crypto.d.ts:176](https://github.com/valgaze/bun-types/blob/5e53f27/crypto.d.ts#L176)
