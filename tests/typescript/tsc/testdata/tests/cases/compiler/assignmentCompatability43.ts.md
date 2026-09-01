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
        "name": "__test1__",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 19
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
                "name": "interfaceWithPublicAndOptional",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 73
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
                      "start": 74,
                      "end": 75
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 74,
                    "end": 75
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 76,
                      "end": 77
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 76,
                    "end": 77
                  }
                ],
                "start": 73,
                "end": 78
              },
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
                      "name": "one",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 81,
                      "end": 84
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
                          "start": 86,
                          "end": 87
                        },
                        "typeArguments": null,
                        "start": 86,
                        "end": 87
                      },
                      "start": 84,
                      "end": 87
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 81,
                    "end": 88
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 89,
                      "end": 92
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 95,
                          "end": 96
                        },
                        "typeArguments": null,
                        "start": 95,
                        "end": 96
                      },
                      "start": 93,
                      "end": 96
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 89,
                    "end": 97
                  }
                ],
                "start": 79,
                "end": 99
              },
              "declare": false,
              "start": 33,
              "end": 99
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 26,
            "end": 99
          },
          {
            "type": "EmptyStatement",
            "start": 99,
            "end": 100
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "interfaceWithPublicAndOptional",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 112,
                        "end": 142
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 143,
                            "end": 149
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 150,
                            "end": 156
                          }
                        ],
                        "start": 142,
                        "end": 157
                      },
                      "start": 112,
                      "end": 157
                    },
                    "start": 110,
                    "end": 157
                  },
                  "start": 106,
                  "end": 157
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
                        "name": "one",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 162,
                        "end": 165
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 167,
                        "end": 168
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 162,
                      "end": 168
                    }
                  ],
                  "start": 160,
                  "end": 170
                },
                "definite": false,
                "start": 106,
                "end": 170
              }
            ],
            "declare": false,
            "start": 102,
            "end": 171
          },
          {
            "type": "EmptyStatement",
            "start": 171,
            "end": 172
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
                    "name": "__val__obj4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 188,
                    "end": 199
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 202,
                    "end": 206
                  },
                  "definite": false,
                  "start": 188,
                  "end": 206
                }
              ],
              "declare": false,
              "start": 184,
              "end": 207
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 177,
            "end": 207
          }
        ],
        "start": 20,
        "end": 209
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 209
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "__test2__",
        "optional": false,
        "typeAnnotation": null,
        "start": 220,
        "end": 229
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
                "name": "interfaceTwo",
                "optional": false,
                "typeAnnotation": null,
                "start": 271,
                "end": 283
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
                      "start": 284,
                      "end": 285
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 284,
                    "end": 285
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 286,
                      "end": 287
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 286,
                    "end": 287
                  }
                ],
                "start": 283,
                "end": 288
              },
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
                      "name": "one",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 291,
                      "end": 294
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
                          "start": 296,
                          "end": 297
                        },
                        "typeArguments": null,
                        "start": 296,
                        "end": 297
                      },
                      "start": 294,
                      "end": 297
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 291,
                    "end": 298
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "two",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 299,
                      "end": 302
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 304,
                          "end": 305
                        },
                        "typeArguments": null,
                        "start": 304,
                        "end": 305
                      },
                      "start": 302,
                      "end": 305
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 299,
                    "end": 306
                  }
                ],
                "start": 289,
                "end": 308
              },
              "declare": false,
              "start": 261,
              "end": 308
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 236,
            "end": 308
          },
          {
            "type": "EmptyStatement",
            "start": 308,
            "end": 309
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "interfaceTwo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 322,
                        "end": 334
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 335,
                            "end": 341
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 342,
                            "end": 348
                          }
                        ],
                        "start": 334,
                        "end": 349
                      },
                      "start": 322,
                      "end": 349
                    },
                    "start": 320,
                    "end": 349
                  },
                  "start": 316,
                  "end": 349
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
                        "name": "one",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 354,
                        "end": 357
                      },
                      "value": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 359,
                        "end": 360
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 354,
                      "end": 360
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "two",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 362,
                        "end": 365
                      },
                      "value": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 367,
                        "end": 370
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 362,
                      "end": 370
                    }
                  ],
                  "start": 352,
                  "end": 372
                },
                "definite": false,
                "start": 316,
                "end": 372
              }
            ],
            "declare": false,
            "start": 312,
            "end": 373
          },
          {
            "type": "EmptyStatement",
            "start": 373,
            "end": 374
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
                    "name": "__val__obj2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 390,
                    "end": 401
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 404,
                    "end": 408
                  },
                  "definite": false,
                  "start": 390,
                  "end": 408
                }
              ],
              "declare": false,
              "start": 386,
              "end": 409
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 379,
            "end": 409
          }
        ],
        "start": 230,
        "end": 411
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 210,
      "end": 411
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "__test2__",
            "optional": false,
            "typeAnnotation": null,
            "start": 412,
            "end": 421
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "__val__obj2",
            "optional": false,
            "typeAnnotation": null,
            "start": 422,
            "end": 433
          },
          "optional": false,
          "computed": false,
          "start": 412,
          "end": 433
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "__test1__",
            "optional": false,
            "typeAnnotation": null,
            "start": 436,
            "end": 445
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "__val__obj4",
            "optional": false,
            "typeAnnotation": null,
            "start": 446,
            "end": 457
          },
          "optional": false,
          "computed": false,
          "start": 436,
          "end": 457
        },
        "start": 412,
        "end": 457
      },
      "directive": null,
      "start": 412,
      "end": 457
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 457
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
    "value": "__test1__",
    "start": 10,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 26,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 33,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "interfaceWithPublicAndOptional",
    "start": 43,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 81,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 89,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 99,
    "end": 100
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 102,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "obj4",
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
    "type": "Identifier",
    "value": "interfaceWithPublicAndOptional",
    "start": 112,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 143,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 150,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 162,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 165,
    "end": 166
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 177,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 184,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "__val__obj4",
    "start": 188,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "obj4",
    "start": 202,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 210,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "__test2__",
    "start": 220,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 230,
    "end": 231
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 236,
    "end": 242
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 261,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "interfaceTwo",
    "start": 271,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 285,
    "end": 286
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
    "value": "{",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 291,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 299,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 308,
    "end": 309
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 312,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 316,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "interfaceTwo",
    "start": 322,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "number",
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
    "value": "string",
    "start": 342,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "one",
    "start": 354,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 357,
    "end": 358
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 360,
    "end": 361
  },
  {
    "type": "Identifier",
    "value": "two",
    "start": 362,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 365,
    "end": 366
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 367,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 373,
    "end": 374
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 379,
    "end": 385
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 386,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "__val__obj2",
    "start": 390,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 402,
    "end": 403
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 404,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 410,
    "end": 411
  },
  {
    "type": "Identifier",
    "value": "__test2__",
    "start": 412,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "__val__obj2",
    "start": 422,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "__test1__",
    "start": 436,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "__val__obj4",
    "start": 446,
    "end": 457
  }
]
```
