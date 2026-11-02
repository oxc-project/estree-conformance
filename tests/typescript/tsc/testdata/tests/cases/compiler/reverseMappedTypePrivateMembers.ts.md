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
        "name": "Entity",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 69
      },
      "typeParameters": null,
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
              "name": "secret",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 90
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 93,
              "end": 94
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 76,
            "end": 95
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "hidden",
              "optional": false,
              "typeAnnotation": null,
              "start": 110,
              "end": 116
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 119,
              "end": 120
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected",
            "start": 100,
            "end": 121
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "markChanged",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 137
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "field",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 145,
                      "end": 151
                    },
                    "start": 143,
                    "end": 151
                  },
                  "start": 138,
                  "end": 151
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 154,
                  "end": 158
                },
                "start": 152,
                "end": 158
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 159,
                "end": 161
              },
              "expression": false,
              "start": 137,
              "end": 161
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 126,
            "end": 161
          }
        ],
        "start": 70,
        "end": 163
      },
      "abstract": false,
      "declare": false,
      "start": 57,
      "end": 163
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Account",
        "optional": false,
        "typeAnnotation": null,
        "start": 170,
        "end": 177
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Entity",
        "optional": false,
        "typeAnnotation": null,
        "start": 186,
        "end": 192
      },
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
              "name": "emailAddress",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 211
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 214,
              "end": 216
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 199,
            "end": 217
          }
        ],
        "start": 193,
        "end": 219
      },
      "abstract": false,
      "declare": false,
      "start": 164,
      "end": 219
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getAccount",
        "optional": false,
        "typeAnnotation": null,
        "start": 238,
        "end": 248
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 249,
              "end": 250
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 259,
              "end": 265
            },
            "default": {
              "type": "TSObjectKeyword",
              "start": 268,
              "end": 274
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 249,
            "end": 274
          }
        ],
        "start": 248,
        "end": 275
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Readonly",
            "optional": false,
            "typeAnnotation": null,
            "start": 279,
            "end": 287
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Account",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 288,
                      "end": 295
                    },
                    "typeArguments": null,
                    "start": 288,
                    "end": 295
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 298,
                      "end": 299
                    },
                    "typeArguments": null,
                    "start": 298,
                    "end": 299
                  }
                ],
                "start": 288,
                "end": 299
              }
            ],
            "start": 287,
            "end": 300
          },
          "start": 279,
          "end": 300
        },
        "start": 277,
        "end": 300
      },
      "body": null,
      "expression": false,
      "start": 221,
      "end": 301
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getAccountPlain",
        "optional": false,
        "typeAnnotation": null,
        "start": 319,
        "end": 334
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Readonly",
            "optional": false,
            "typeAnnotation": null,
            "start": 338,
            "end": 346
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Account",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 347,
                      "end": 354
                    },
                    "typeArguments": null,
                    "start": 347,
                    "end": 354
                  },
                  {
                    "type": "TSObjectKeyword",
                    "start": 357,
                    "end": 363
                  }
                ],
                "start": 347,
                "end": 363
              }
            ],
            "start": 346,
            "end": 364
          },
          "start": 338,
          "end": 364
        },
        "start": 336,
        "end": 364
      },
      "body": null,
      "expression": false,
      "start": 302,
      "end": 365
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
              "name": "plain",
              "optional": false,
              "typeAnnotation": null,
              "start": 380,
              "end": 385
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getAccountPlain",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 388,
                  "end": 403
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 388,
                "end": 405
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Account",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 409,
                  "end": 416
                },
                "typeArguments": null,
                "start": 409,
                "end": 416
              },
              "start": 388,
              "end": 416
            },
            "definite": false,
            "start": 380,
            "end": 416
          }
        ],
        "declare": false,
        "start": 374,
        "end": 417
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 367,
      "end": 417
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
              "name": "explicit",
              "optional": false,
              "typeAnnotation": null,
              "start": 431,
              "end": 439
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getAccount",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 442,
                  "end": 452
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSObjectKeyword",
                      "start": 453,
                      "end": 459
                    }
                  ],
                  "start": 452,
                  "end": 460
                },
                "arguments": [],
                "optional": false,
                "start": 442,
                "end": 462
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Account",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 466,
                  "end": 473
                },
                "typeArguments": null,
                "start": 466,
                "end": 473
              },
              "start": 442,
              "end": 473
            },
            "definite": false,
            "start": 431,
            "end": 473
          }
        ],
        "declare": false,
        "start": 425,
        "end": 474
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 418,
      "end": 474
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
              "name": "inferred",
              "optional": false,
              "typeAnnotation": null,
              "start": 488,
              "end": 496
            },
            "init": {
              "type": "TSAsExpression",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getAccount",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 499,
                  "end": 509
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 499,
                "end": 511
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Account",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 515,
                  "end": 522
                },
                "typeArguments": null,
                "start": 515,
                "end": 522
              },
              "start": 499,
              "end": 522
            },
            "definite": false,
            "start": 488,
            "end": 522
          }
        ],
        "declare": false,
        "start": 482,
        "end": 523
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 475,
      "end": 523
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 523
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 57,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "Entity",
    "start": 63,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 76,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "secret",
    "start": 84,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 91,
    "end": 92
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 100,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "hidden",
    "start": 110,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 117,
    "end": 118
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "markChanged",
    "start": 126,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "field",
    "start": 138,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 145,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 154,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 164,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "Account",
    "start": 170,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 178,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "Entity",
    "start": 186,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "emailAddress",
    "start": 199,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 212,
    "end": 213
  },
  {
    "type": "String",
    "value": "''",
    "start": 214,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 218,
    "end": 219
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 221,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 229,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "getAccount",
    "start": 238,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 248,
    "end": 249
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 249,
    "end": 250
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 251,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 259,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 266,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 268,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 276,
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
    "value": "Readonly",
    "start": 279,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "Account",
    "start": 288,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 302,
    "end": 309
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 310,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "getAccountPlain",
    "start": 319,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "Readonly",
    "start": 338,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "Account",
    "start": 347,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 357,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 364,
    "end": 365
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 367,
    "end": 373
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 374,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "plain",
    "start": 380,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "getAccountPlain",
    "start": 388,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 406,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "Account",
    "start": 409,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 416,
    "end": 417
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 418,
    "end": 424
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 425,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "explicit",
    "start": 431,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "getAccount",
    "start": 442,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 453,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 463,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "Account",
    "start": 466,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 473,
    "end": 474
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 475,
    "end": 481
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 482,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "inferred",
    "start": 488,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "getAccount",
    "start": 499,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 512,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "Account",
    "start": 515,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 522,
    "end": 523
  }
]
```
