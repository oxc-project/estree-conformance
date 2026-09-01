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
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 18,
              "end": 24
            },
            "start": 16,
            "end": 24
          },
          "start": 13,
          "end": 24
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 29
          },
          "right": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 35
            },
            "operator": "??",
            "right": {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 39,
              "end": 44
            },
            "start": 32,
            "end": 44
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 26,
          "end": 44
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 46,
        "end": 49
      },
      "expression": false,
      "start": 0,
      "end": 49
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 49
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 9,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 13,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 18,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 26,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 32,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "??",
    "start": 36,
    "end": 38
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 39,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 48,
    "end": 49
  }
]
```
