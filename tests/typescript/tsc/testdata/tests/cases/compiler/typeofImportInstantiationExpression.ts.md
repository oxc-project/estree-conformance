__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Arg",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 47
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 49
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 52,
              "end": 55
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 48,
            "end": 55
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Params",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 63
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 78
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 79,
                    "end": 85
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 87,
                    "end": 90
                  }
                ],
                "start": 78,
                "end": 91
              },
              "start": 72,
              "end": 91
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 94,
                "end": 100
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 101,
                    "end": 107
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 109,
                    "end": 112
                  }
                ],
                "start": 100,
                "end": 113
              },
              "start": 94,
              "end": 113
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 57,
            "end": 113
          }
        ],
        "start": 47,
        "end": 114
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Literal",
              "value": "__is_argument__",
              "raw": "\"__is_argument__\"",
              "start": 121,
              "end": 138
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 141,
                  "end": 145
                },
                "start": 141,
                "end": 145
              },
              "start": 139,
              "end": 145
            },
            "accessibility": null,
            "static": false,
            "start": 121,
            "end": 146
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "meta",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 155
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 158,
                  "end": 159
                },
                "typeArguments": null,
                "start": 158,
                "end": 159
              },
              "start": 156,
              "end": 159
            },
            "accessibility": null,
            "static": false,
            "start": 151,
            "end": 160
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "params",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 171
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Params",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 174,
                  "end": 180
                },
                "typeArguments": null,
                "start": 174,
                "end": 180
              },
              "start": 172,
              "end": 180
            },
            "accessibility": null,
            "static": false,
            "start": 165,
            "end": 181
          }
        ],
        "start": 115,
        "end": 183
      },
      "declare": false,
      "start": 34,
      "end": 183
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "myFunction",
          "optional": false,
          "typeAnnotation": null,
          "start": 201,
          "end": 211
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 212,
                "end": 213
              },
              "constraint": null,
              "default": {
                "type": "TSAnyKeyword",
                "start": 216,
                "end": 219
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 212,
              "end": 219
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 221,
                "end": 222
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 231,
                  "end": 237
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 238,
                      "end": 244
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 246,
                      "end": 249
                    }
                  ],
                  "start": 237,
                  "end": 250
                },
                "start": 231,
                "end": 250
              },
              "default": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Record",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 253,
                  "end": 259
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 260,
                      "end": 266
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 268,
                      "end": 271
                    }
                  ],
                  "start": 259,
                  "end": 272
                },
                "start": 253,
                "end": 272
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 221,
              "end": 272
            }
          ],
          "start": 211,
          "end": 273
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 279,
                  "end": 282
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 283,
                        "end": 284
                      },
                      "typeArguments": null,
                      "start": 283,
                      "end": 284
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 286,
                        "end": 287
                      },
                      "typeArguments": null,
                      "start": 286,
                      "end": 287
                    }
                  ],
                  "start": 282,
                  "end": 288
                },
                "start": 279,
                "end": 288
              },
              "start": 277,
              "end": 288
            },
            "start": 274,
            "end": 288
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "TSAsExpression",
                "expression": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 300,
                      "end": 303
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "params",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 304,
                      "end": 310
                    },
                    "optional": false,
                    "computed": false,
                    "start": 300,
                    "end": 310
                  },
                  "operator": "||",
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 314,
                    "end": 316
                  },
                  "start": 300,
                  "end": 316
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 321,
                    "end": 322
                  },
                  "typeArguments": null,
                  "start": 321,
                  "end": 322
                },
                "start": 299,
                "end": 322
              },
              "start": 292,
              "end": 322
            }
          ],
          "start": 290,
          "end": 324
        },
        "expression": false,
        "start": 192,
        "end": 324
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 185,
      "end": 324
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 34,
  "end": 325
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 34,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "Arg",
    "start": 44,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 52,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 57,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 64,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 72,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 79,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 87,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 94,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 101,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 109,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116
  },
  {
    "type": "String",
    "value": "\"__is_argument__\"",
    "start": 121,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 141,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "meta",
    "start": 151,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 165,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "Params",
    "start": 174,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 182,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 185,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 192,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "myFunction",
    "start": 201,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 216,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 221,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 223,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 231,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 238,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 244,
    "end": 245
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 246,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 253,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 260,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 268,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 274,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "Arg",
    "start": 279,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 284,
    "end": 285
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 290,
    "end": 291
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 292,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 300,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "params",
    "start": 304,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 311,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 318,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 323,
    "end": 324
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 7
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "TSImportType",
          "source": {
            "type": "Literal",
            "value": "./input.js",
            "raw": "'./input.js'",
            "start": 24,
            "end": 36
          },
          "options": null,
          "qualifier": {
            "type": "Identifier",
            "decorators": [],
            "name": "myFunction",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 48
          },
          "typeArguments": null,
          "start": 17,
          "end": 48
        },
        "typeArguments": null,
        "start": 10,
        "end": 48
      },
      "declare": false,
      "start": 0,
      "end": 49
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 57
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "exprName": {
          "type": "TSImportType",
          "source": {
            "type": "Literal",
            "value": "./input.js",
            "raw": "'./input.js'",
            "start": 74,
            "end": 86
          },
          "options": null,
          "qualifier": {
            "type": "Identifier",
            "decorators": [],
            "name": "myFunction",
            "optional": false,
            "typeAnnotation": null,
            "start": 88,
            "end": 98
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 99,
                "end": 102
              },
              {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "slug",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 106,
                      "end": 110
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "hello",
                          "raw": "'hello'",
                          "start": 112,
                          "end": 119
                        },
                        "start": 112,
                        "end": 119
                      },
                      "start": 110,
                      "end": 119
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 106,
                    "end": 119
                  }
                ],
                "start": 104,
                "end": 121
              }
            ],
            "start": 98,
            "end": 122
          },
          "start": 67,
          "end": 122
        },
        "typeArguments": null,
        "start": 60,
        "end": 122
      },
      "declare": false,
      "start": 50,
      "end": 123
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 123
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 5,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 10,
    "end": 16
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 17,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 23,
    "end": 24
  },
  {
    "type": "String",
    "value": "'./input.js'",
    "start": 24,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "myFunction",
    "start": 38,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 50,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 55,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 60,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 67,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 73,
    "end": 74
  },
  {
    "type": "String",
    "value": "'./input.js'",
    "start": 74,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "myFunction",
    "start": 88,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 99,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "slug",
    "start": 106,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 112,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  }
]
```
