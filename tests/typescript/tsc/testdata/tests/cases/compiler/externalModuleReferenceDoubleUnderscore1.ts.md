__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "timezonecomplete",
        "raw": "'timezonecomplete'",
        "start": 15,
        "end": 33
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "basics",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 53
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "__timezonecomplete/basics",
                "raw": "\"__timezonecomplete/basics\"",
                "start": 64,
                "end": 91
              },
              "start": 56,
              "end": 92
            },
            "importKind": "value",
            "start": 40,
            "end": 93
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "TimeUnit",
                "optional": false,
                "typeAnnotation": null,
                "start": 112,
                "end": 120
              },
              "moduleReference": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "basics",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 123,
                  "end": 129
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TimeUnit",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 130,
                  "end": 138
                },
                "start": 123,
                "end": 138
              },
              "importKind": "value",
              "start": 105,
              "end": 139
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 98,
            "end": 139
          }
        ],
        "start": 34,
        "end": 141
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 141
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "__timezonecomplete/basics",
        "raw": "'__timezonecomplete/basics'",
        "start": 158,
        "end": 185
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "TimeUnit",
                "optional": false,
                "typeAnnotation": null,
                "start": 204,
                "end": 212
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Second",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 223,
                      "end": 229
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 232,
                      "end": 233
                    },
                    "computed": false,
                    "start": 223,
                    "end": 233
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Minute",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 243,
                      "end": 249
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 252,
                      "end": 253
                    },
                    "computed": false,
                    "start": 243,
                    "end": 253
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Hour",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 263,
                      "end": 267
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 270,
                      "end": 271
                    },
                    "computed": false,
                    "start": 263,
                    "end": 271
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Day",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 281,
                      "end": 284
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 287,
                      "end": 288
                    },
                    "computed": false,
                    "start": 281,
                    "end": 288
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Week",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 298,
                      "end": 302
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 305,
                      "end": 306
                    },
                    "computed": false,
                    "start": 298,
                    "end": 306
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Month",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 316,
                      "end": 321
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 5,
                      "raw": "5",
                      "start": 324,
                      "end": 325
                    },
                    "computed": false,
                    "start": 316,
                    "end": 325
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Year",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 335,
                      "end": 339
                    },
                    "initializer": {
                      "type": "Literal",
                      "value": 6,
                      "raw": "6",
                      "start": 342,
                      "end": 343
                    },
                    "computed": false,
                    "start": 335,
                    "end": 343
                  }
                ],
                "start": 213,
                "end": 350
              },
              "const": false,
              "declare": false,
              "start": 199,
              "end": 350
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 192,
            "end": 350
          }
        ],
        "start": 186,
        "end": 352
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 143,
      "end": 352
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 352
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 8,
    "end": 14
  },
  {
    "type": "String",
    "value": "'timezonecomplete'",
    "start": 15,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 40,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "basics",
    "start": 47,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 56,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 63,
    "end": 64
  },
  {
    "type": "String",
    "value": "\"__timezonecomplete/basics\"",
    "start": 64,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 98,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 105,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "TimeUnit",
    "start": 112,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "basics",
    "start": 123,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "TimeUnit",
    "start": 130,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 143,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 151,
    "end": 157
  },
  {
    "type": "String",
    "value": "'__timezonecomplete/basics'",
    "start": 158,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 192,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 199,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "TimeUnit",
    "start": 204,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "Second",
    "start": 223,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 230,
    "end": 231
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "Minute",
    "start": 243,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 250,
    "end": 251
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "Hour",
    "start": 263,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 268,
    "end": 269
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "Day",
    "start": 281,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 285,
    "end": 286
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "Week",
    "start": 298,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 303,
    "end": 304
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 306,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "Month",
    "start": 316,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 322,
    "end": 323
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 325,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "Year",
    "start": 335,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 340,
    "end": 341
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 351,
    "end": 352
  }
]
```
