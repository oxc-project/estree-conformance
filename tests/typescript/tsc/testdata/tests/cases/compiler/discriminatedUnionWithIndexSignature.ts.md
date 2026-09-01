__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "UnionAltA",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 26
        },
        "typeParameters": null,
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
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 33,
                "end": 37
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "text",
                    "raw": "'text'",
                    "start": 40,
                    "end": 46
                  },
                  "start": 40,
                  "end": 46
                },
                "start": 38,
                "end": 46
              },
              "accessibility": null,
              "static": false,
              "start": 33,
              "end": 47
            }
          ],
          "start": 27,
          "end": 49
        },
        "declare": false,
        "start": 7,
        "end": 49
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 49
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "UnionAltB",
          "optional": false,
          "typeAnnotation": null,
          "start": 68,
          "end": 77
        },
        "typeParameters": null,
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
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 88
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "image",
                        "raw": "'image'",
                        "start": 91,
                        "end": 98
                      },
                      "start": 91,
                      "end": 98
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "video",
                        "raw": "'video'",
                        "start": 101,
                        "end": 108
                      },
                      "start": 101,
                      "end": 108
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "document",
                        "raw": "'document'",
                        "start": 111,
                        "end": 121
                      },
                      "start": 111,
                      "end": 121
                    }
                  ],
                  "start": 91,
                  "end": 121
                },
                "start": 89,
                "end": 121
              },
              "accessibility": null,
              "static": false,
              "start": 84,
              "end": 122
            }
          ],
          "start": 78,
          "end": 124
        },
        "declare": false,
        "start": 58,
        "end": 124
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 51,
      "end": 124
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ValueUnion",
          "optional": false,
          "typeAnnotation": null,
          "start": 138,
          "end": 148
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnionAltA",
                "optional": false,
                "typeAnnotation": null,
                "start": 151,
                "end": 160
              },
              "typeArguments": null,
              "start": 151,
              "end": 160
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UnionAltB",
                "optional": false,
                "typeAnnotation": null,
                "start": 163,
                "end": 172
              },
              "typeArguments": null,
              "start": 163,
              "end": 172
            }
          ],
          "start": 151,
          "end": 172
        },
        "declare": false,
        "start": 133,
        "end": 173
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 126,
      "end": 173
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "MapOrSingleton",
          "optional": false,
          "typeAnnotation": null,
          "start": 187,
          "end": 201
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 226,
                          "end": 232
                        },
                        "start": 224,
                        "end": 232
                      },
                      "start": 221,
                      "end": 232
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ValueUnion",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 235,
                        "end": 245
                      },
                      "typeArguments": null,
                      "start": 235,
                      "end": 245
                    },
                    "start": 233,
                    "end": 245
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 220,
                  "end": 246
                }
              ],
              "start": 210,
              "end": 252
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ValueUnion",
                "optional": false,
                "typeAnnotation": null,
                "start": 259,
                "end": 269
              },
              "typeArguments": null,
              "start": 259,
              "end": 269
            }
          ],
          "start": 208,
          "end": 269
        },
        "declare": false,
        "start": 182,
        "end": 270
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 175,
      "end": 270
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "withoutAsConst",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MapOrSingleton",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 294,
                  "end": 308
                },
                "typeArguments": null,
                "start": 294,
                "end": 308
              },
              "start": 292,
              "end": 308
            },
            "start": 278,
            "end": 308
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 317,
                  "end": 318
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 330,
                        "end": 334
                      },
                      "value": {
                        "type": "Literal",
                        "value": "text",
                        "raw": "'text'",
                        "start": 336,
                        "end": 342
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 330,
                      "end": 342
                    }
                  ],
                  "start": 320,
                  "end": 362
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 317,
                "end": 362
              }
            ],
            "start": 311,
            "end": 365
          },
          "definite": false,
          "start": 278,
          "end": 365
        }
      ],
      "declare": false,
      "start": 272,
      "end": 366
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "withAsConst",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MapOrSingleton",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 387,
                  "end": 401
                },
                "typeArguments": null,
                "start": 387,
                "end": 401
              },
              "start": 385,
              "end": 401
            },
            "start": 374,
            "end": 401
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 410,
                  "end": 411
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 423,
                        "end": 427
                      },
                      "value": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Literal",
                          "value": "text",
                          "raw": "'text'",
                          "start": 429,
                          "end": 435
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "const",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 439,
                            "end": 444
                          },
                          "typeArguments": null,
                          "start": 439,
                          "end": 444
                        },
                        "start": 429,
                        "end": 444
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 423,
                      "end": 444
                    }
                  ],
                  "start": 413,
                  "end": 451
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 410,
                "end": 451
              }
            ],
            "start": 404,
            "end": 454
          },
          "definite": false,
          "start": 374,
          "end": 454
        }
      ],
      "declare": false,
      "start": 368,
      "end": 455
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 455
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "UnionAltA",
    "start": 17,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 33,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39
  },
  {
    "type": "String",
    "value": "'text'",
    "start": 40,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 51,
    "end": 57
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 58,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "UnionAltB",
    "start": 68,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 84,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90
  },
  {
    "type": "String",
    "value": "'image'",
    "start": 91,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 99,
    "end": 100
  },
  {
    "type": "String",
    "value": "'video'",
    "start": 101,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 109,
    "end": 110
  },
  {
    "type": "String",
    "value": "'document'",
    "start": 111,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 126,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 133,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "ValueUnion",
    "start": 138,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "UnionAltA",
    "start": 151,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "UnionAltB",
    "start": 163,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 172,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 175,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 182,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "MapOrSingleton",
    "start": 187,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 221,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 226,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 232,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "ValueUnion",
    "start": 235,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "ValueUnion",
    "start": 259,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
    "end": 270
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 272,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "withoutAsConst",
    "start": 278,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "MapOrSingleton",
    "start": 294,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 311,
    "end": 312
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 330,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 334,
    "end": 335
  },
  {
    "type": "String",
    "value": "'text'",
    "start": 336,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 362,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 365,
    "end": 366
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 368,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "withAsConst",
    "start": 374,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 385,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "MapOrSingleton",
    "start": 387,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 404,
    "end": 405
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 423,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 427,
    "end": 428
  },
  {
    "type": "String",
    "value": "'text'",
    "start": 429,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 436,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "const",
    "start": 439,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 454,
    "end": 455
  }
]
```
