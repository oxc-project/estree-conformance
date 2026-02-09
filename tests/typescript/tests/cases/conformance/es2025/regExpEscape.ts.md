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
            "name": "regExp",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 12
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "RegExp",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 25
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
                    "name": "RegExp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 26,
                    "end": 32
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "escape",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 33,
                    "end": 39
                  },
                  "optional": false,
                  "computed": false,
                  "start": 26,
                  "end": 39
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "foo.bar",
                    "raw": "\"foo.bar\"",
                    "start": 40,
                    "end": 49
                  }
                ],
                "optional": false,
                "start": 26,
                "end": 50
              }
            ],
            "start": 15,
            "end": 51
          },
          "definite": false,
          "start": 6,
          "end": 51
        }
      ],
      "declare": false,
      "start": 0,
      "end": 52
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
            "name": "regExp",
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 59
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 64
          },
          "optional": false,
          "computed": false,
          "start": 53,
          "end": 64
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo.bar",
            "raw": "\"foo.bar\"",
            "start": 65,
            "end": 74
          }
        ],
        "optional": false,
        "start": 53,
        "end": 75
      },
      "directive": null,
      "start": 53,
      "end": 76
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 76
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
    "value": "regExp",
    "start": 6,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 13,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 15,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 19,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 26,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "escape",
    "start": 33,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 39,
    "end": 40
  },
  {
    "type": "String",
    "value": "\"foo.bar\"",
    "start": 40,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "regExp",
    "start": 53,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 60,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 64,
    "end": 65
  },
  {
    "type": "String",
    "value": "\"foo.bar\"",
    "start": 65,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 75,
    "end": 76
  }
]
```
