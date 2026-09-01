__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 11
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 29
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 40,
                        "end": 46
                      },
                      "start": 38,
                      "end": 46
                    },
                    "start": 37,
                    "end": 46
                  },
                  "readonly": false,
                  "static": false,
                  "start": 30,
                  "end": 46
                },
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 58,
                        "end": 64
                      },
                      "start": 56,
                      "end": 64
                    },
                    "start": 55,
                    "end": 64
                  },
                  "readonly": false,
                  "static": false,
                  "start": 48,
                  "end": 64
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 66,
                "end": 69
              },
              "expression": false,
              "start": 29,
              "end": 69
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 18,
            "end": 69
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "Origin",
              "optional": false,
              "typeAnnotation": null,
              "start": 82,
              "end": 88
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 90,
                  "end": 95
                },
                "typeArguments": null,
                "start": 90,
                "end": 95
              },
              "start": 88,
              "end": 95
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 100,
                    "end": 101
                  },
                  "value": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 103,
                    "end": 104
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 100,
                  "end": 104
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 106,
                    "end": 107
                  },
                  "value": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 109,
                    "end": 110
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 106,
                  "end": 110
                }
              ],
              "start": 98,
              "end": 112
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 75,
            "end": 113
          }
        ],
        "start": 12,
        "end": 115
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 115
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null,
        "start": 127,
        "end": 132
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Origin",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 150,
                    "end": 156
                  },
                  "init": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 159,
                    "end": 161
                  },
                  "definite": false,
                  "start": 150,
                  "end": 161
                }
              ],
              "declare": false,
              "start": 146,
              "end": 162
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 139,
            "end": 162
          }
        ],
        "start": 133,
        "end": 202
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 117,
      "end": 202
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 215,
        "end": 216
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 236,
                "end": 241
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 252,
                      "end": 263
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 274,
                                "end": 280
                              },
                              "start": 272,
                              "end": 280
                            },
                            "start": 271,
                            "end": 280
                          },
                          "readonly": false,
                          "static": false,
                          "start": 264,
                          "end": 280
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 292,
                                "end": 298
                              },
                              "start": 290,
                              "end": 298
                            },
                            "start": 289,
                            "end": 298
                          },
                          "readonly": false,
                          "static": false,
                          "start": 282,
                          "end": 298
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 300,
                        "end": 303
                      },
                      "expression": false,
                      "start": 263,
                      "end": 303
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 252,
                    "end": 303
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Origin",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 320,
                      "end": 326
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Point",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 328,
                          "end": 333
                        },
                        "typeArguments": null,
                        "start": 328,
                        "end": 333
                      },
                      "start": 326,
                      "end": 333
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 338,
                            "end": 339
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 341,
                            "end": 342
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 338,
                          "end": 342
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 344,
                            "end": 345
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 347,
                            "end": 348
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 344,
                          "end": 348
                        }
                      ],
                      "start": 336,
                      "end": 350
                    },
                    "computed": false,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 313,
                    "end": 351
                  }
                ],
                "start": 242,
                "end": 357
              },
              "abstract": false,
              "declare": false,
              "start": 230,
              "end": 357
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 223,
            "end": 357
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 380,
                "end": 385
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "VariableDeclaration",
                      "kind": "var",
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Origin",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 407,
                            "end": 413
                          },
                          "init": {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\"",
                            "start": 416,
                            "end": 418
                          },
                          "definite": false,
                          "start": 407,
                          "end": 418
                        }
                      ],
                      "declare": false,
                      "start": 403,
                      "end": 419
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 396,
                    "end": 419
                  }
                ],
                "start": 386,
                "end": 463
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 370,
              "end": 463
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 363,
            "end": 463
          }
        ],
        "start": 217,
        "end": 465
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 205,
      "end": 465
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 465
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 6,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 18,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 30,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "type": "Identifier",
    "value": "number",
    "start": 40,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 48,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 58,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 75,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "Origin",
    "start": 82,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 90,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 117,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 127,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 133,
    "end": 134
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 139,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 146,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "Origin",
    "start": 150,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 157,
    "end": 158
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 159,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 205,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 223,
    "end": 229
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 230,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 236,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 252,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 264,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 274,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 280,
    "end": 281
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 282,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 292,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 302,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 313,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "Origin",
    "start": 320,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 328,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 338,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 339,
    "end": 340
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 345,
    "end": 346
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 356,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 363,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 370,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 380,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 386,
    "end": 387
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 396,
    "end": 402
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 403,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "Origin",
    "start": 407,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 414,
    "end": 415
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 416,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 464,
    "end": 465
  }
]
```
