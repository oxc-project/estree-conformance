__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 36,
                "end": 41
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 52,
                      "end": 53
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 55,
                        "end": 61
                      },
                      "start": 53,
                      "end": 61
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 52,
                    "end": 62
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 71,
                      "end": 72
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 74,
                        "end": 80
                      },
                      "start": 72,
                      "end": 80
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 71,
                    "end": 81
                  }
                ],
                "start": 42,
                "end": 87
              },
              "declare": false,
              "start": 26,
              "end": 87
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 19,
            "end": 87
          },
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
                          "start": 112,
                          "end": 117
                        },
                        "typeArguments": null,
                        "start": 112,
                        "end": 117
                      },
                      "start": 110,
                      "end": 117
                    },
                    "start": 104,
                    "end": 117
                  },
                  "init": {
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
                          "start": 122,
                          "end": 123
                        },
                        "value": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 125,
                          "end": 126
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 122,
                        "end": 126
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
                          "start": 128,
                          "end": 129
                        },
                        "value": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 131,
                          "end": 132
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 128,
                        "end": 132
                      }
                    ],
                    "start": 120,
                    "end": 134
                  },
                  "definite": false,
                  "start": 104,
                  "end": 134
                }
              ],
              "declare": false,
              "start": 100,
              "end": 135
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 93,
            "end": 135
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point3d",
                "optional": false,
                "typeAnnotation": null,
                "start": 158,
                "end": 165
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 174,
                    "end": 179
                  },
                  "typeArguments": null,
                  "start": 174,
                  "end": 179
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 190,
                      "end": 191
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 193,
                        "end": 199
                      },
                      "start": 191,
                      "end": 199
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 190,
                    "end": 200
                  }
                ],
                "start": 180,
                "end": 206
              },
              "declare": false,
              "start": 148,
              "end": 206
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 141,
            "end": 206
          },
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
                    "name": "Origin3d",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Point3d",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 233,
                          "end": 240
                        },
                        "typeArguments": null,
                        "start": 233,
                        "end": 240
                      },
                      "start": 231,
                      "end": 240
                    },
                    "start": 223,
                    "end": 240
                  },
                  "init": {
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
                          "start": 245,
                          "end": 246
                        },
                        "value": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 248,
                          "end": 249
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 245,
                        "end": 249
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
                          "start": 251,
                          "end": 252
                        },
                        "value": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 254,
                          "end": 255
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 251,
                        "end": 255
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 257,
                          "end": 258
                        },
                        "value": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 260,
                          "end": 261
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 257,
                        "end": 261
                      }
                    ],
                    "start": 243,
                    "end": 263
                  },
                  "definite": false,
                  "start": 223,
                  "end": 263
                }
              ],
              "declare": false,
              "start": 219,
              "end": 264
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 212,
            "end": 264
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Line",
                "optional": false,
                "typeAnnotation": null,
                "start": 287,
                "end": 291
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TPoint",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 292,
                      "end": 298
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 307,
                        "end": 312
                      },
                      "typeArguments": null,
                      "start": 307,
                      "end": 312
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 292,
                    "end": 312
                  }
                ],
                "start": 291,
                "end": 313
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "start",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TPoint",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 335,
                              "end": 341
                            },
                            "typeArguments": null,
                            "start": 335,
                            "end": 341
                          },
                          "start": 333,
                          "end": 341
                        },
                        "start": 328,
                        "end": 341
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "end",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TPoint",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 348,
                              "end": 354
                            },
                            "typeArguments": null,
                            "start": 348,
                            "end": 354
                          },
                          "start": 346,
                          "end": 354
                        },
                        "start": 343,
                        "end": 354
                      }
                    ],
                    "returnType": null,
                    "start": 323,
                    "end": 356
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "start",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 365,
                      "end": 370
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TPoint",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 372,
                          "end": 378
                        },
                        "typeArguments": null,
                        "start": 372,
                        "end": 378
                      },
                      "start": 370,
                      "end": 378
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 365,
                    "end": 379
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "end",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 388,
                      "end": 391
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TPoint",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 393,
                          "end": 399
                        },
                        "typeArguments": null,
                        "start": 393,
                        "end": 399
                      },
                      "start": 391,
                      "end": 399
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 388,
                    "end": 400
                  }
                ],
                "start": 313,
                "end": 406
              },
              "declare": false,
              "start": 277,
              "end": 406
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 270,
            "end": 406
          }
        ],
        "start": 12,
        "end": 408
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 408
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 408
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 19,
    "end": 25
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 26,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 36,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 55,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 74,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 93,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 100,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "Origin",
    "start": 104,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 112,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 129,
    "end": 130
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 133,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 134,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 141,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 148,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "Point3d",
    "start": 158,
    "end": 165
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 166,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 174,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 193,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 205,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 212,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 219,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "Origin3d",
    "start": 223,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "Point3d",
    "start": 233,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 246,
    "end": 247
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 252,
    "end": 253
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 258,
    "end": 259
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 270,
    "end": 276
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 277,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "Line",
    "start": 287,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "TPoint",
    "start": 292,
    "end": 298
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 299,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 307,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 313,
    "end": 314
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 323,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "start",
    "start": 328,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "TPoint",
    "start": 335,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "end",
    "start": 343,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "TPoint",
    "start": 348,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "start",
    "start": 365,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "TPoint",
    "start": 372,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "end",
    "start": 388,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "TPoint",
    "start": 393,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 407,
    "end": 408
  }
]
```
