__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 16,
          "end": 20
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 23
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
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
                    "name": "composed",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 35,
                    "end": 43
                  },
                  "init": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 59,
                          "end": 63
                        },
                        "optional": false,
                        "typeAnnotation": null,
                        "value": null,
                        "start": 56,
                        "end": 63
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 65,
                      "end": 68
                    },
                    "expression": false,
                    "start": 46,
                    "end": 68
                  },
                  "definite": false,
                  "start": 35,
                  "end": 68
                }
              ],
              "declare": false,
              "start": 29,
              "end": 68
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 72,
                    "end": 78
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "defineProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 79,
                    "end": 93
                  },
                  "optional": false,
                  "computed": false,
                  "start": 72,
                  "end": 93
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "composed",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 94,
                    "end": 102
                  },
                  {
                    "type": "Literal",
                    "value": "name",
                    "raw": "'name'",
                    "start": 104,
                    "end": 110
                  },
                  {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 118,
                          "end": 123
                        },
                        "value": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "composed",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 125,
                              "end": 133
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fn",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 134,
                              "end": 136
                            },
                            "optional": false,
                            "computed": false,
                            "start": 125,
                            "end": 136
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "value": "_test",
                            "raw": "'_test'",
                            "start": 139,
                            "end": 146
                          },
                          "start": 125,
                          "end": 146
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 118,
                        "end": 146
                      }
                    ],
                    "start": 112,
                    "end": 150
                  }
                ],
                "optional": false,
                "start": 72,
                "end": 151
              },
              "directive": null,
              "start": 72,
              "end": 151
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "composed",
                "optional": false,
                "typeAnnotation": null,
                "start": 162,
                "end": 170
              },
              "start": 155,
              "end": 170
            }
          ],
          "start": 25,
          "end": 172
        },
        "expression": false,
        "start": 7,
        "end": 172
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 172
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 172
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
    "value": "function",
    "start": 7,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 16,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 21,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 29,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "composed",
    "start": 35,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 46,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 56,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 59,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 72,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "defineProperty",
    "start": 79,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "composed",
    "start": 94,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 102,
    "end": 103
  },
  {
    "type": "String",
    "value": "'name'",
    "start": 104,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 118,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "composed",
    "start": 125,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 134,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 137,
    "end": 138
  },
  {
    "type": "String",
    "value": "'_test'",
    "start": 139,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 150,
    "end": 151
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 155,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "composed",
    "start": 162,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 171,
    "end": 172
  }
]
```
