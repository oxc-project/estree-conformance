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
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": {
        "type": "Literal",
        "value": null,
        "raw": "null",
        "start": 16,
        "end": 20
      },
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
              "start": 27,
              "end": 38
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 51,
                        "end": 56
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 51,
                      "end": 58
                    },
                    "directive": null,
                    "start": 51,
                    "end": 59
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Object",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 75,
                          "end": 81
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "create",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 82,
                          "end": 88
                        },
                        "optional": false,
                        "computed": false,
                        "start": 75,
                        "end": 88
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 89,
                          "end": 93
                        }
                      ],
                      "optional": false,
                      "start": 75,
                      "end": 94
                    },
                    "start": 68,
                    "end": 95
                  }
                ],
                "start": 41,
                "end": 101
              },
              "expression": false,
              "start": 38,
              "end": 101
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 27,
            "end": 101
          }
        ],
        "start": 21,
        "end": 103
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 103
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 112
      },
      "typeParameters": null,
      "superClass": {
        "type": "Literal",
        "value": null,
        "raw": "null",
        "start": 121,
        "end": 125
      },
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
              "start": 132,
              "end": 143
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
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Object",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 163,
                          "end": 169
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "create",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 170,
                          "end": 176
                        },
                        "optional": false,
                        "computed": false,
                        "start": 163,
                        "end": 176
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 177,
                          "end": 181
                        }
                      ],
                      "optional": false,
                      "start": 163,
                      "end": 182
                    },
                    "start": 156,
                    "end": 183
                  }
                ],
                "start": 146,
                "end": 189
              },
              "expression": false,
              "start": 143,
              "end": 189
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 132,
            "end": 189
          }
        ],
        "start": 126,
        "end": 191
      },
      "abstract": false,
      "declare": false,
      "start": 105,
      "end": 191
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 191
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
    "value": "C",
    "start": 6,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8,
    "end": 15
  },
  {
    "type": "Null",
    "value": "null",
    "start": 16,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 27,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 51,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 68,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 75,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 82,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 88,
    "end": 89
  },
  {
    "type": "Null",
    "value": "null",
    "start": 89,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Punctuator",
    "value": "}",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 105,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 113,
    "end": 120
  },
  {
    "type": "Null",
    "value": "null",
    "start": 121,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 132,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 156,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 163,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 170,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 176,
    "end": 177
  },
  {
    "type": "Null",
    "value": "null",
    "start": 177,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 190,
    "end": 191
  }
]
```
