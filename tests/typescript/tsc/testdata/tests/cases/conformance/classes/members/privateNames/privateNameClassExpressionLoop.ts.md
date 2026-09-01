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
            "name": "array",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 11
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 14,
            "end": 16
          },
          "definite": false,
          "start": 6,
          "end": 16
        }
      ],
      "declare": false,
      "start": 0,
      "end": 17
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 28
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 31,
              "end": 32
            },
            "definite": false,
            "start": 27,
            "end": 32
          }
        ],
        "declare": false,
        "start": 23,
        "end": 32
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 34,
          "end": 35
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 38,
          "end": 40
        },
        "start": 34,
        "end": 40
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 44,
          "end": 45
        },
        "start": 42,
        "end": 45
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 53,
                  "end": 58
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 59,
                  "end": 63
                },
                "optional": false,
                "computed": false,
                "start": 53,
                "end": 63
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ClassExpression",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 70,
                    "end": 71
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
                          "type": "PrivateIdentifier",
                          "name": "myField",
                          "start": 82,
                          "end": 90
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "Literal",
                          "value": "hello",
                          "raw": "\"hello\"",
                          "start": 93,
                          "end": 100
                        },
                        "computed": false,
                        "static": false,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null,
                        "start": 82,
                        "end": 101
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "PrivateIdentifier",
                          "name": "method",
                          "start": 110,
                          "end": 117
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
                            "start": 120,
                            "end": 122
                          },
                          "expression": false,
                          "start": 117,
                          "end": 122
                        },
                        "kind": "method",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 110,
                        "end": 122
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "PrivateIdentifier",
                          "name": "accessor",
                          "start": 135,
                          "end": 144
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
                                  "type": "Literal",
                                  "value": 42,
                                  "raw": "42",
                                  "start": 156,
                                  "end": 158
                                },
                                "start": 149,
                                "end": 159
                              }
                            ],
                            "start": 147,
                            "end": 161
                          },
                          "expression": false,
                          "start": 144,
                          "end": 161
                        },
                        "kind": "get",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 131,
                        "end": 161
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "PrivateIdentifier",
                          "name": "accessor",
                          "start": 174,
                          "end": 183
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
                              "name": "val",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 184,
                              "end": 187
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 189,
                            "end": 192
                          },
                          "expression": false,
                          "start": 183,
                          "end": 192
                        },
                        "kind": "set",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 170,
                        "end": 192
                      }
                    ],
                    "start": 72,
                    "end": 198
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 64,
                  "end": 198
                }
              ],
              "optional": false,
              "start": 53,
              "end": 199
            },
            "directive": null,
            "start": 53,
            "end": 200
          }
        ],
        "start": 47,
        "end": 202
      },
      "start": 18,
      "end": 202
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 202
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
    "value": "array",
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
    "type": "Punctuator",
    "value": "[",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 16,
    "end": 17
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 18,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 23,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 29,
    "end": 30
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 36,
    "end": 37
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 38,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 42,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "array",
    "start": 53,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 59,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 63,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 64,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73
  },
  {
    "type": "PrivateIdentifier",
    "value": "myField",
    "start": 82,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 91,
    "end": 92
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 93,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  },
  {
    "type": "PrivateIdentifier",
    "value": "method",
    "start": 110,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 131,
    "end": 134
  },
  {
    "type": "PrivateIdentifier",
    "value": "accessor",
    "start": 135,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 147,
    "end": 148
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 149,
    "end": 155
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 156,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 170,
    "end": 173
  },
  {
    "type": "PrivateIdentifier",
    "value": "accessor",
    "start": 174,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 184,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 198,
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
    "start": 201,
    "end": 202
  }
]
```
