__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 0
}
```
__ESTREE_TEST__:TOKENS:
```json
[]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 110,
              "end": 111
            },
            "value": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 113,
              "end": 116
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 110,
            "end": 116
          },
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 123
            },
            "value": {
              "type": "Literal",
              "value": "b",
              "raw": "'b'",
              "start": 125,
              "end": 128
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 122,
            "end": 128
          }
        ],
        "start": 104,
        "end": 130
      },
      "exportKind": "value",
      "start": 89,
      "end": 130
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 89,
  "end": 130
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 89,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 96,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 111,
    "end": 112
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 113,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 125,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 129,
    "end": 130
  }
]
```
