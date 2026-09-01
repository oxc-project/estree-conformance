__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "db",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 15
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
                "name": "doSomething",
                "optional": false,
                "typeAnnotation": null,
                "start": 29,
                "end": 40
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 43,
                  "end": 50
                },
                "expression": false,
                "start": 40,
                "end": 50
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 22,
              "end": 50
            }
          ],
          "start": 16,
          "end": 52
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 52
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 52
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 53
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
    "value": "class",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 13,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 16,
    "end": 17
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 22,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 29,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "db",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 10
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Database",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 22
          },
          "importKind": "value",
          "start": 8,
          "end": 22
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./db",
        "raw": "'./db'",
        "start": 29,
        "end": 35
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 36
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "someDecorator",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 59
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "target",
          "optional": false,
          "typeAnnotation": null,
          "start": 60,
          "end": 66
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "target",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 87
            },
            "start": 74,
            "end": 88
          }
        ],
        "start": 68,
        "end": 90
      },
      "expression": false,
      "start": 37,
      "end": 90
    },
    {
      "type": "ClassDeclaration",
      "decorators": [
        {
          "type": "Decorator",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "someDecorator",
            "optional": false,
            "typeAnnotation": null,
            "start": 92,
            "end": 105
          },
          "start": 91,
          "end": 105
        }
      ],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 119
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
              "name": "db",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 128
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Database",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 130,
                  "end": 138
                },
                "typeArguments": null,
                "start": 130,
                "end": 138
              },
              "start": 128,
              "end": 138
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
            "start": 126,
            "end": 139
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 145,
              "end": 156
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
                  "name": "db",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Database",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 161,
                        "end": 169
                      },
                      "typeArguments": null,
                      "start": 161,
                      "end": 169
                    },
                    "start": 159,
                    "end": 169
                  },
                  "start": 157,
                  "end": 169
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 197,
                          "end": 201
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "db",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 202,
                          "end": 204
                        },
                        "optional": false,
                        "computed": false,
                        "start": 197,
                        "end": 204
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "db",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 207,
                        "end": 209
                      },
                      "start": 197,
                      "end": 209
                    },
                    "directive": null,
                    "start": 197,
                    "end": 210
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 219,
                            "end": 223
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "db",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 224,
                            "end": 226
                          },
                          "optional": false,
                          "computed": false,
                          "start": 219,
                          "end": 226
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "doSomething",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 227,
                          "end": 238
                        },
                        "optional": false,
                        "computed": false,
                        "start": 219,
                        "end": 238
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 219,
                      "end": 240
                    },
                    "directive": null,
                    "start": 219,
                    "end": 241
                  }
                ],
                "start": 171,
                "end": 247
              },
              "expression": false,
              "start": 156,
              "end": 247
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 145,
            "end": 247
          }
        ],
        "start": 120,
        "end": 249
      },
      "abstract": false,
      "declare": false,
      "start": 91,
      "end": 249
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 258,
            "end": 265
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "MyClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 258,
            "end": 265
          },
          "exportKind": "value",
          "start": 258,
          "end": 265
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 250,
      "end": 267
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 267
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 8,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 11,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "Database",
    "start": 14,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 24,
    "end": 28
  },
  {
    "type": "String",
    "value": "'./db'",
    "start": 29,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 37,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "someDecorator",
    "start": 46,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 60,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 74,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "target",
    "start": 81,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "someDecorator",
    "start": 92,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 106,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 112,
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
    "value": "db",
    "start": 126,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "Database",
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
    "type": "Identifier",
    "value": "constructor",
    "start": 145,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 157,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "Database",
    "start": 161,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 171,
    "end": 172
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 197,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 202,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 207,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 209,
    "end": 210
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 219,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "db",
    "start": 224,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 227,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 246,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 248,
    "end": 249
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 250,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "MyClass",
    "start": 258,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267
  }
]
```
