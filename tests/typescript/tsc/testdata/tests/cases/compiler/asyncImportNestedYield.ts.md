__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 16,
        "end": 19
      },
      "generator": true,
      "async": true,
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
              "type": "ImportExpression",
              "source": {
                "type": "MemberExpression",
                "object": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "ImportExpression",
                    "source": {
                      "type": "YieldExpression",
                      "delegate": false,
                      "argument": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "\"foo\"",
                        "start": 55,
                        "end": 60
                      },
                      "start": 49,
                      "end": 60
                    },
                    "options": null,
                    "phase": null,
                    "start": 42,
                    "end": 61
                  },
                  "start": 36,
                  "end": 61
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "default",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 63,
                  "end": 70
                },
                "optional": false,
                "computed": false,
                "start": 35,
                "end": 70
              },
              "options": null,
              "phase": null,
              "start": 28,
              "end": 71
            },
            "directive": null,
            "start": 28,
            "end": 72
          }
        ],
        "start": 22,
        "end": 74
      },
      "expression": false,
      "start": 0,
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
    "type": "Identifier",
    "value": "async",
    "start": 0,
    "end": 5
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 16,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 22,
    "end": 23
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 28,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 36,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 49,
    "end": 54
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 55,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "default",
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
    "type": "Punctuator",
    "value": "}",
    "start": 73,
    "end": 74
  }
]
```
