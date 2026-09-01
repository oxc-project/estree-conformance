__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 6
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
                "type": "Identifier",
                "decorators": [],
                "name": "val",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 24,
                    "end": 31
                  },
                  "start": 22,
                  "end": 31
                },
                "start": 19,
                "end": 31
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
                    "name": "val",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 42,
                    "end": 45
                  },
                  "start": 35,
                  "end": 46
                }
              ],
              "start": 33,
              "end": 48
            },
            "expression": false,
            "start": 9,
            "end": 48
          },
          "definite": false,
          "start": 4,
          "end": 48
        }
      ],
      "declare": false,
      "start": 0,
      "end": 48
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 49,
          "end": 51
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 52,
              "end": 55
            },
            "operator": "in",
            "right": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 61,
                    "end": 64
                  },
                  "value": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 66,
                    "end": 70
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 61,
                  "end": 70
                }
              ],
              "start": 59,
              "end": 72
            },
            "start": 52,
            "end": 72
          }
        ],
        "optional": false,
        "start": 49,
        "end": 73
      },
      "directive": null,
      "start": 49,
      "end": 74
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 74
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 4,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7,
    "end": 8
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 19,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 24,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 35,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 42,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 49,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 51,
    "end": 52
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 52,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 56,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 61,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 64,
    "end": 65
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 66,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 73,
    "end": 74
  }
]
```
