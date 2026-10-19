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
            "name": "keys",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "language",
                        "raw": "\"language\"",
                        "start": 21,
                        "end": 31
                      },
                      "start": 21,
                      "end": 31
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "theme",
                        "raw": "\"theme\"",
                        "start": 34,
                        "end": 41
                      },
                      "start": 34,
                      "end": 41
                    }
                  ],
                  "start": 21,
                  "end": 41
                },
                "start": 20,
                "end": 44
              },
              "start": 18,
              "end": 44
            },
            "start": 14,
            "end": 44
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 44
        }
      ],
      "declare": true,
      "start": 0,
      "end": 45
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
            "name": "settings",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 60
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
                "start": 63,
                "end": 69
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "fromEntries",
                "optional": false,
                "typeAnnotation": null,
                "start": 70,
                "end": 81
              },
              "optional": false,
              "computed": false,
              "start": 63,
              "end": 81
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "keys",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 82,
                    "end": 86
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 87,
                    "end": 90
                  },
                  "optional": false,
                  "computed": false,
                  "start": 82,
                  "end": 90
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 91,
                        "end": 94
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 99,
                          "end": 102
                        },
                        {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 104,
                          "end": 106
                        }
                      ],
                      "start": 98,
                      "end": 107
                    },
                    "id": null,
                    "generator": false,
                    "start": 91,
                    "end": 107
                  }
                ],
                "optional": false,
                "start": 82,
                "end": 108
              }
            ],
            "optional": false,
            "start": 63,
            "end": 109
          },
          "definite": false,
          "start": 52,
          "end": 109
        }
      ],
      "declare": false,
      "start": 46,
      "end": 110
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
            "name": "settings",
            "optional": false,
            "typeAnnotation": null,
            "start": 111,
            "end": 119
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "timestamp",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 129
          },
          "optional": false,
          "computed": false,
          "start": 111,
          "end": 129
        },
        "right": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 132,
          "end": 134
        },
        "start": 111,
        "end": 134
      },
      "directive": null,
      "start": 111,
      "end": 135
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 135
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
    "value": "keys",
    "start": 14,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21
  },
  {
    "type": "String",
    "value": "\"language\"",
    "start": 21,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 32,
    "end": 33
  },
  {
    "type": "String",
    "value": "\"theme\"",
    "start": 34,
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
    "value": "[",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 46,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "settings",
    "start": 52,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 63,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "fromEntries",
    "start": 70,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "keys",
    "start": 82,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 87,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 91,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 95,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 98,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 99,
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
    "value": "\"\"",
    "start": 104,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "settings",
    "start": 111,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "timestamp",
    "start": 120,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 130,
    "end": 131
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 132,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 134,
    "end": 135
  }
]
```
