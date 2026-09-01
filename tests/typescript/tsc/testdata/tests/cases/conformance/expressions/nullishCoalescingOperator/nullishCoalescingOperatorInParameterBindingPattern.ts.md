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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 62,
            "end": 63
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 70,
                    "end": 76
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 79,
                    "end": 88
                  }
                ],
                "start": 70,
                "end": 88
              },
              "start": 68,
              "end": 88
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 101
            },
            "id": null,
            "generator": false,
            "start": 66,
            "end": 101
          },
          "definite": false,
          "start": 62,
          "end": 101
        }
      ],
      "declare": false,
      "start": 56,
      "end": 102
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": false,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "ObjectPattern",
              "decorators": [],
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 108,
                        "end": 109
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 108,
                      "end": 111
                    },
                    "operator": "??",
                    "right": {
                      "type": "Literal",
                      "value": "d",
                      "raw": "\"d\"",
                      "start": 115,
                      "end": 118
                    },
                    "start": 108,
                    "end": 118
                  },
                  "value": {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 121,
                      "end": 122
                    },
                    "right": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 125,
                      "end": 127
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 121,
                    "end": 127
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 107,
                  "end": 127
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 129
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [],
            "start": 134,
            "end": 136
          },
          "id": null,
          "generator": false,
          "start": 104,
          "end": 136
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 103,
        "end": 139
      },
      "directive": null,
      "start": 103,
      "end": 140
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 140
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 56,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 70,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 79,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 89,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 92,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 112,
    "end": 114
  },
  {
    "type": "String",
    "value": "\"d\"",
    "start": 115,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 123,
    "end": 124
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 125,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 131,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 134,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
  }
]
```
