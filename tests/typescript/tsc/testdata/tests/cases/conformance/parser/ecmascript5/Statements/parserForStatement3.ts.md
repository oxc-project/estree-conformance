__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForInStatement",
      "left": {
        "type": "Identifier",
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null,
        "start": 4,
        "end": 5
      },
      "right": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9,
                  "end": 10
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "jh",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 11,
                  "end": 13
                },
                "optional": false,
                "computed": false,
                "start": 9,
                "end": 13
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 14,
                "end": 15
              },
              "optional": false,
              "computed": true,
              "start": 9,
              "end": 16
            },
            "right": {
              "type": "LogicalExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 17,
                    "end": 18
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "jh",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 19,
                    "end": 21
                  },
                  "optional": false,
                  "computed": false,
                  "start": 17,
                  "end": 21
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 22,
                  "end": 23
                },
                "optional": false,
                "computed": true,
                "start": 17,
                "end": 24
              },
              "operator": "||",
              "right": {
                "type": "ArrayExpression",
                "elements": [],
                "start": 26,
                "end": 28
              },
              "start": 17,
              "end": 28
            },
            "start": 9,
            "end": 28
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 30
          }
        ],
        "start": 9,
        "end": 30
      },
      "body": {
        "type": "EmptyStatement",
        "start": 31,
        "end": 32
      },
      "start": 0,
      "end": 32
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 32
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "for",
    "start": 0,
    "end": 3
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 4,
    "end": 5
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 6,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "jh",
    "start": 11,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "value": "=",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "jh",
    "start": 19,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 24,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32
  }
]
```
