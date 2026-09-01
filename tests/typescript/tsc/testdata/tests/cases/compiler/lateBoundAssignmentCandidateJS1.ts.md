__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
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
              "name": "kBar",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 74
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 77,
                "end": 83
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "\"bar\"",
                  "start": 84,
                  "end": 89
                }
              ],
              "optional": false,
              "start": 77,
              "end": 90
            },
            "definite": false,
            "start": 70,
            "end": 90
          }
        ],
        "declare": false,
        "start": 64,
        "end": 91
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 57,
      "end": 91
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo0",
          "optional": false,
          "typeAnnotation": null,
          "start": 106,
          "end": 110
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
                "name": "kBar",
                "optional": false,
                "typeAnnotation": null,
                "start": 181,
                "end": 185
              },
              "typeAnnotation": null,
              "value": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 189,
                "end": 193
              },
              "computed": true,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 180,
              "end": 194
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 204,
                "end": 207
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
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 227,
                          "end": 231
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "kBar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 232,
                          "end": 236
                        },
                        "optional": false,
                        "computed": true,
                        "start": 227,
                        "end": 237
                      },
                      "start": 220,
                      "end": 238
                    }
                  ],
                  "start": 210,
                  "end": 244
                },
                "expression": false,
                "start": 207,
                "end": 244
              },
              "kind": "get",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 200,
              "end": 244
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 291,
                "end": 294
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
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 295,
                    "end": 300
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
                            "start": 312,
                            "end": 316
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "kBar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 317,
                            "end": 321
                          },
                          "optional": false,
                          "computed": true,
                          "start": 312,
                          "end": 322
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 325,
                          "end": 330
                        },
                        "start": 312,
                        "end": 330
                      },
                      "directive": null,
                      "start": 312,
                      "end": 331
                    }
                  ],
                  "start": 302,
                  "end": 337
                },
                "expression": false,
                "start": 294,
                "end": 337
              },
              "kind": "set",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 287,
              "end": 337
            }
          ],
          "start": 111,
          "end": 339
        },
        "abstract": false,
        "declare": false,
        "start": 100,
        "end": 339
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 93,
      "end": 339
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 339
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 57,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 64,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "kBar",
    "start": 70,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 77,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 83,
    "end": 84
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 84,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 93,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 100,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "foo0",
    "start": 106,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "kBar",
    "start": 181,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 187,
    "end": 188
  },
  {
    "type": "Null",
    "value": "null",
    "start": 189,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 200,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 204,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "return",
    "start": 220,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 227,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "kBar",
    "start": 232,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 287,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 291,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 294,
    "end": 295
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 295,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 302,
    "end": 303
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 312,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "kBar",
    "start": 317,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 325,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 338,
    "end": 339
  }
]
```
