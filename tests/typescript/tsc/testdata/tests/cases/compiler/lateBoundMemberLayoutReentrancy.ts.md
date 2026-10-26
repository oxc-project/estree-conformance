__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "rI",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RI",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 18,
                  "end": 20
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 21,
                        "end": 24
                      },
                      "start": 21,
                      "end": 24
                    }
                  ],
                  "start": 20,
                  "end": 25
                },
                "start": 18,
                "end": 25
              },
              "start": 16,
              "end": 25
            },
            "start": 14,
            "end": 25
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 25
        }
      ],
      "declare": true,
      "start": 0,
      "end": 26
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "rI",
          "optional": false,
          "typeAnnotation": null,
          "start": 27,
          "end": 29
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 30,
          "end": 31
        },
        "optional": false,
        "computed": false,
        "start": 27,
        "end": 31
      },
      "directive": null,
      "start": 27,
      "end": 31
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RI",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 44
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
              "start": 45,
              "end": 46
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 55,
                    "end": 58
                  },
                  "start": 55,
                  "end": 58
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 61,
                    "end": 64
                  },
                  "start": 61,
                  "end": 64
                }
              ],
              "start": 55,
              "end": 64
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 45,
            "end": 64
          }
        ],
        "start": 44,
        "end": 65
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 73
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
                  "start": 75,
                  "end": 76
                },
                "typeArguments": null,
                "start": 75,
                "end": 76
              },
              "start": 73,
              "end": 76
            },
            "accessibility": null,
            "static": false,
            "start": 72,
            "end": 77
          },
          {
            "type": "TSPropertySignature",
            "computed": true,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rI",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 85
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 86,
                "end": 87
              },
              "optional": false,
              "computed": false,
              "start": 83,
              "end": 87
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 90,
                  "end": 93
                },
                "start": 90,
                "end": 93
              },
              "start": 88,
              "end": 93
            },
            "accessibility": null,
            "static": false,
            "start": 82,
            "end": 94
          }
        ],
        "start": 66,
        "end": 96
      },
      "declare": false,
      "start": 32,
      "end": 96
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
            "name": "rI2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RI",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 116,
                  "end": 118
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "b",
                        "raw": "\"b\"",
                        "start": 119,
                        "end": 122
                      },
                      "start": 119,
                      "end": 122
                    }
                  ],
                  "start": 118,
                  "end": 123
                },
                "start": 116,
                "end": 123
              },
              "start": 114,
              "end": 123
            },
            "start": 111,
            "end": 123
          },
          "init": null,
          "definite": false,
          "start": 111,
          "end": 123
        }
      ],
      "declare": true,
      "start": 97,
      "end": 124
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "v1",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 140
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rI2",
                "optional": false,
                "typeAnnotation": null,
                "start": 143,
                "end": 146
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 147,
                "end": 148
              },
              "optional": false,
              "computed": false,
              "start": 143,
              "end": 148
            },
            "definite": false,
            "start": 138,
            "end": 148
          }
        ],
        "declare": false,
        "start": 132,
        "end": 149
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 125,
      "end": 149
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "v2",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 165
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rI",
                "optional": false,
                "typeAnnotation": null,
                "start": 168,
                "end": 170
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 172
              },
              "optional": false,
              "computed": false,
              "start": 168,
              "end": 172
            },
            "definite": false,
            "start": 163,
            "end": 172
          }
        ],
        "declare": false,
        "start": 157,
        "end": 173
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 150,
      "end": 173
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "K2",
          "optional": false,
          "typeAnnotation": null,
          "start": 186,
          "end": 188
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "RI",
              "optional": false,
              "typeAnnotation": null,
              "start": 197,
              "end": 199
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 200,
                    "end": 203
                  },
                  "start": 200,
                  "end": 203
                }
              ],
              "start": 199,
              "end": 204
            },
            "start": 197,
            "end": 204
          },
          "start": 191,
          "end": 204
        },
        "declare": false,
        "start": 181,
        "end": 205
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 174,
      "end": 205
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "k",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 222,
                    "end": 224
                  },
                  "typeArguments": null,
                  "start": 222,
                  "end": 224
                },
                "start": 220,
                "end": 224
              },
              "start": 219,
              "end": 224
            },
            "init": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 227,
              "end": 230
            },
            "definite": false,
            "start": 219,
            "end": 230
          }
        ],
        "declare": false,
        "start": 213,
        "end": 231
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 206,
      "end": 231
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "o",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RI",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 248,
                    "end": 250
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "b",
                          "raw": "\"b\"",
                          "start": 251,
                          "end": 254
                        },
                        "start": 251,
                        "end": 254
                      }
                    ],
                    "start": 250,
                    "end": 255
                  },
                  "start": 248,
                  "end": 255
                },
                "start": 246,
                "end": 255
              },
              "start": 245,
              "end": 255
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
                    "start": 260,
                    "end": 261
                  },
                  "value": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 263,
                    "end": 266
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 260,
                  "end": 266
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 268,
                    "end": 269
                  },
                  "value": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 271,
                    "end": 274
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 268,
                  "end": 274
                }
              ],
              "start": 258,
              "end": 276
            },
            "definite": false,
            "start": 245,
            "end": 276
          }
        ],
        "declare": false,
        "start": 239,
        "end": 277
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 232,
      "end": 277
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
            "name": "rC",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 297,
                  "end": 299
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 300,
                        "end": 303
                      },
                      "start": 300,
                      "end": 303
                    }
                  ],
                  "start": 299,
                  "end": 304
                },
                "start": 297,
                "end": 304
              },
              "start": 295,
              "end": 304
            },
            "start": 293,
            "end": 304
          },
          "init": null,
          "definite": false,
          "start": 293,
          "end": 304
        }
      ],
      "declare": true,
      "start": 279,
      "end": 305
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "rC",
          "optional": false,
          "typeAnnotation": null,
          "start": 306,
          "end": 308
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 309,
          "end": 310
        },
        "optional": false,
        "computed": false,
        "start": 306,
        "end": 310
      },
      "directive": null,
      "start": 306,
      "end": 310
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RC",
        "optional": false,
        "typeAnnotation": null,
        "start": 325,
        "end": 327
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
              "start": 328,
              "end": 329
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 338,
                    "end": 341
                  },
                  "start": 338,
                  "end": 341
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 344,
                    "end": 347
                  },
                  "start": 344,
                  "end": 347
                }
              ],
              "start": 338,
              "end": 347
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 328,
            "end": 347
          }
        ],
        "start": 327,
        "end": 348
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 355,
              "end": 356
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
                  "start": 358,
                  "end": 359
                },
                "typeArguments": null,
                "start": 358,
                "end": 359
              },
              "start": 356,
              "end": 359
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 355,
            "end": 360
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rC",
                "optional": false,
                "typeAnnotation": null,
                "start": 366,
                "end": 368
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 369,
                "end": 370
              },
              "optional": false,
              "computed": false,
              "start": 366,
              "end": 370
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 373,
                  "end": 376
                },
                "start": 373,
                "end": 376
              },
              "start": 371,
              "end": 376
            },
            "value": null,
            "computed": true,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 365,
            "end": 377
          }
        ],
        "start": 349,
        "end": 379
      },
      "abstract": false,
      "declare": true,
      "start": 311,
      "end": 379
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
            "name": "rC2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 399,
                  "end": 401
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "b",
                        "raw": "\"b\"",
                        "start": 402,
                        "end": 405
                      },
                      "start": 402,
                      "end": 405
                    }
                  ],
                  "start": 401,
                  "end": 406
                },
                "start": 399,
                "end": 406
              },
              "start": 397,
              "end": 406
            },
            "start": 394,
            "end": 406
          },
          "init": null,
          "definite": false,
          "start": 394,
          "end": 406
        }
      ],
      "declare": true,
      "start": 380,
      "end": 407
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "w1",
              "optional": false,
              "typeAnnotation": null,
              "start": 421,
              "end": 423
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rC2",
                "optional": false,
                "typeAnnotation": null,
                "start": 426,
                "end": 429
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 430,
                "end": 431
              },
              "optional": false,
              "computed": false,
              "start": 426,
              "end": 431
            },
            "definite": false,
            "start": 421,
            "end": 431
          }
        ],
        "declare": false,
        "start": 415,
        "end": 432
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 408,
      "end": 432
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "w2",
              "optional": false,
              "typeAnnotation": null,
              "start": 446,
              "end": 448
            },
            "init": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "rC",
                "optional": false,
                "typeAnnotation": null,
                "start": 451,
                "end": 453
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 454,
                "end": 455
              },
              "optional": false,
              "computed": false,
              "start": 451,
              "end": 455
            },
            "definite": false,
            "start": 446,
            "end": 455
          }
        ],
        "declare": false,
        "start": 440,
        "end": 456
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 433,
      "end": 456
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 456
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
    "type": "Keyword",
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "rI",
    "start": 14,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "RI",
    "start": 18,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 20,
    "end": 21
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 21,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "rI",
    "start": 27,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 30,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 32,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "RI",
    "start": 42,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 47,
    "end": 54
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 55,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 59,
    "end": 60
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 61,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Identifier",
    "value": "x",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "rI",
    "start": 83,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 90,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 97,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 105,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "rI2",
    "start": 111,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "RI",
    "start": 116,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 118,
    "end": 119
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 119,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 125,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 132,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 138,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "rI2",
    "start": 143,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 148,
    "end": 149
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 150,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 157,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 163,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "rI",
    "start": 168,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 171,
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
    "start": 174,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 181,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "K2",
    "start": 186,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 191,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "RI",
    "start": 197,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 199,
    "end": 200
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 200,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 206,
    "end": 212
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 213,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "K2",
    "start": 222,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 225,
    "end": 226
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 227,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 232,
    "end": 238
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 239,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "o",
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
    "type": "Identifier",
    "value": "RI",
    "start": 248,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 250,
    "end": 251
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 251,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 256,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 260,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 263,
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
    "value": "a",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 269,
    "end": 270
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 271,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 279,
    "end": 286
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 287,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "rC",
    "start": 293,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "RC",
    "start": 297,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 299,
    "end": 300
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 300,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "rC",
    "start": 306,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 309,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 311,
    "end": 318
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 319,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "RC",
    "start": 325,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 328,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 330,
    "end": 337
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 338,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 342,
    "end": 343
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 344,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "rC",
    "start": 366,
    "end": 368
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 368,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 371,
    "end": 372
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 373,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 380,
    "end": 387
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 388,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "rC2",
    "start": 394,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 397,
    "end": 398
  },
  {
    "type": "Identifier",
    "value": "RC",
    "start": 399,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 401,
    "end": 402
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 402,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 406,
    "end": 407
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 408,
    "end": 414
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 415,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "w1",
    "start": 421,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "rC2",
    "start": 426,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 431,
    "end": 432
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 433,
    "end": 439
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 440,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "w2",
    "start": 446,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "rC",
    "start": 451,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 455,
    "end": 456
  }
]
```
