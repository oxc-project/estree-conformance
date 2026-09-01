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
            "name": "basic",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 11
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 14,
                "end": 20
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "groupBy",
                "optional": false,
                "typeAnnotation": null,
                "start": 21,
                "end": 28
              },
              "optional": false,
              "computed": false,
              "start": 14,
              "end": 28
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 30,
                    "end": 31
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 33,
                    "end": 34
                  },
                  {
                    "type": "Literal",
                    "value": 8,
                    "raw": "8",
                    "start": 36,
                    "end": 37
                  }
                ],
                "start": 29,
                "end": 38
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 40,
                    "end": 41
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 45,
                      "end": 46
                    },
                    "operator": "<",
                    "right": {
                      "type": "Literal",
                      "value": 5,
                      "raw": "5",
                      "start": 49,
                      "end": 50
                    },
                    "start": 45,
                    "end": 50
                  },
                  "consequent": {
                    "type": "Literal",
                    "value": "small",
                    "raw": "'small'",
                    "start": 53,
                    "end": 60
                  },
                  "alternate": {
                    "type": "Literal",
                    "value": "large",
                    "raw": "'large'",
                    "start": 63,
                    "end": 70
                  },
                  "start": 45,
                  "end": 70
                },
                "id": null,
                "generator": false,
                "start": 40,
                "end": 70
              }
            ],
            "optional": false,
            "start": 14,
            "end": 71
          },
          "definite": false,
          "start": 6,
          "end": 71
        }
      ],
      "declare": false,
      "start": 0,
      "end": 72
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
            "name": "chars",
            "optional": false,
            "typeAnnotation": null,
            "start": 80,
            "end": 85
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 94
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "groupBy",
                "optional": false,
                "typeAnnotation": null,
                "start": 95,
                "end": 102
              },
              "optional": false,
              "computed": false,
              "start": 88,
              "end": 102
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "a string",
                "raw": "'a string'",
                "start": 103,
                "end": 113
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 115,
                    "end": 116
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 120,
                  "end": 121
                },
                "id": null,
                "generator": false,
                "start": 115,
                "end": 121
              }
            ],
            "optional": false,
            "start": 88,
            "end": 122
          },
          "definite": false,
          "start": 80,
          "end": 122
        }
      ],
      "declare": false,
      "start": 74,
      "end": 123
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Employee",
        "optional": false,
        "typeAnnotation": null,
        "start": 130,
        "end": 138
      },
      "typeParameters": null,
      "typeAnnotation": {
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 143,
              "end": 147
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 149,
                "end": 155
              },
              "start": 147,
              "end": 155
            },
            "accessibility": null,
            "static": false,
            "start": 143,
            "end": 156
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "role",
              "optional": false,
              "typeAnnotation": null,
              "start": 157,
              "end": 161
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
                      "value": "ic",
                      "raw": "'ic'",
                      "start": 163,
                      "end": 167
                    },
                    "start": 163,
                    "end": 167
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "manager",
                      "raw": "'manager'",
                      "start": 170,
                      "end": 179
                    },
                    "start": 170,
                    "end": 179
                  }
                ],
                "start": 163,
                "end": 179
              },
              "start": 161,
              "end": 179
            },
            "accessibility": null,
            "static": false,
            "start": 157,
            "end": 179
          }
        ],
        "start": 141,
        "end": 181
      },
      "declare": false,
      "start": 125,
      "end": 181
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
            "name": "employees",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 199,
                  "end": 202
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Employee",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 203,
                        "end": 211
                      },
                      "typeArguments": null,
                      "start": 203,
                      "end": 211
                    }
                  ],
                  "start": 202,
                  "end": 212
                },
                "start": 199,
                "end": 212
              },
              "start": 197,
              "end": 212
            },
            "start": 188,
            "end": 212
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Set",
              "optional": false,
              "typeAnnotation": null,
              "start": 219,
              "end": 222
            },
            "typeArguments": null,
            "arguments": [],
            "start": 215,
            "end": 224
          },
          "definite": false,
          "start": 188,
          "end": 224
        }
      ],
      "declare": false,
      "start": 182,
      "end": 225
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
            "name": "byRole",
            "optional": false,
            "typeAnnotation": null,
            "start": 232,
            "end": 238
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 241,
                "end": 247
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "groupBy",
                "optional": false,
                "typeAnnotation": null,
                "start": 248,
                "end": 255
              },
              "optional": false,
              "computed": false,
              "start": 241,
              "end": 255
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "employees",
                "optional": false,
                "typeAnnotation": null,
                "start": 256,
                "end": 265
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 267,
                    "end": 268
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 272,
                    "end": 273
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "role",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 274,
                    "end": 278
                  },
                  "optional": false,
                  "computed": false,
                  "start": 272,
                  "end": 278
                },
                "id": null,
                "generator": false,
                "start": 267,
                "end": 278
              }
            ],
            "optional": false,
            "start": 241,
            "end": 279
          },
          "definite": false,
          "start": 232,
          "end": 279
        }
      ],
      "declare": false,
      "start": 226,
      "end": 280
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
            "name": "byNonKey",
            "optional": false,
            "typeAnnotation": null,
            "start": 288,
            "end": 296
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 299,
                "end": 305
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "groupBy",
                "optional": false,
                "typeAnnotation": null,
                "start": 306,
                "end": 313
              },
              "optional": false,
              "computed": false,
              "start": 299,
              "end": 313
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "employees",
                "optional": false,
                "typeAnnotation": null,
                "start": 314,
                "end": 323
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 325,
                    "end": 326
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 330,
                  "end": 331
                },
                "id": null,
                "generator": false,
                "start": 325,
                "end": 331
              }
            ],
            "optional": false,
            "start": 299,
            "end": 332
          },
          "definite": false,
          "start": 288,
          "end": 332
        }
      ],
      "declare": false,
      "start": 282,
      "end": 333
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 333
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "basic",
    "start": 6,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 14,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "groupBy",
    "start": 21,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 29,
    "end": 30
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 31,
    "end": 32
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 34,
    "end": 35
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 42,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 47,
    "end": 48
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 51,
    "end": 52
  },
  {
    "type": "String",
    "value": "'small'",
    "start": 53,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "String",
    "value": "'large'",
    "start": 63,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 71,
    "end": 72
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 74,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "chars",
    "start": 80,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 88,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "groupBy",
    "start": 95,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 102,
    "end": 103
  },
  {
    "type": "String",
    "value": "'a string'",
    "start": 103,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 117,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 125,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "Employee",
    "start": 130,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 143,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 149,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 155,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "role",
    "start": 157,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 161,
    "end": 162
  },
  {
    "type": "String",
    "value": "'ic'",
    "start": 163,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 168,
    "end": 169
  },
  {
    "type": "String",
    "value": "'manager'",
    "start": 170,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 180,
    "end": 181
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 182,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "employees",
    "start": 188,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 199,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "Employee",
    "start": 203,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 211,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 213,
    "end": 214
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 215,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "Set",
    "start": 219,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 223,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 226,
    "end": 231
  },
  {
    "type": "Identifier",
    "value": "byRole",
    "start": 232,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 239,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 241,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 247,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "groupBy",
    "start": 248,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "employees",
    "start": 256,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 269,
    "end": 271
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 273,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "role",
    "start": 274,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 279,
    "end": 280
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 282,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "byNonKey",
    "start": 288,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 299,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 305,
    "end": 306
  },
  {
    "type": "Identifier",
    "value": "groupBy",
    "start": 306,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "employees",
    "start": 314,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 327,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333
  }
]
```
