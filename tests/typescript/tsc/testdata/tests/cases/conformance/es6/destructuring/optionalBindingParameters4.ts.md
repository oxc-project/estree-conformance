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
        "start": 59,
        "end": 62
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cause",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 65,
                  "end": 70
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cause",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 65,
                  "end": 70
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 65,
                "end": 70
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 72
          },
          "right": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 75,
            "end": 77
          },
          "optional": false,
          "typeAnnotation": null,
          "start": 63,
          "end": 77
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
              "name": "cause",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 97
            },
            "start": 85,
            "end": 98
          }
        ],
        "start": 79,
        "end": 100
      },
      "expression": false,
      "start": 50,
      "end": 100
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 50,
  "end": 100
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 50,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 59,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "cause",
    "start": 65,
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
    "value": "=",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 75,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 85,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "cause",
    "start": 92,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 99,
    "end": 100
  }
]
```
