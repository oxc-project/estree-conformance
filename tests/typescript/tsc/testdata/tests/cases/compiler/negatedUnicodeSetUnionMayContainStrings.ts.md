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
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "/[^\\q{xy}b]/v",
            "regex": {
              "pattern": "[^\\q{xy}b]",
              "flags": "v"
            },
            "start": 10,
            "end": 23
          },
          "definite": false,
          "start": 6,
          "end": 23
        }
      ],
      "declare": false,
      "start": 0,
      "end": 24
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 32
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "/[^b\\q{xy}]/v",
            "regex": {
              "pattern": "[^b\\q{xy}]",
              "flags": "v"
            },
            "start": 35,
            "end": 48
          },
          "definite": false,
          "start": 31,
          "end": 48
        }
      ],
      "declare": false,
      "start": 25,
      "end": 49
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 57
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "/[^[b\\q{xy}c]]/v",
            "regex": {
              "pattern": "[^[b\\q{xy}c]]",
              "flags": "v"
            },
            "start": 60,
            "end": 76
          },
          "definite": false,
          "start": 56,
          "end": 76
        }
      ],
      "declare": false,
      "start": 50,
      "end": 77
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 77
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
    "value": "a",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "RegularExpression",
    "value": "/[^\\q{xy}b]/v",
    "regex": {
      "pattern": "[^\\q{xy}b]",
      "flags": "v"
    },
    "start": 10,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 23,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 25,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 33,
    "end": 34
  },
  {
    "type": "RegularExpression",
    "value": "/[^b\\q{xy}]/v",
    "regex": {
      "pattern": "[^b\\q{xy}]",
      "flags": "v"
    },
    "start": 35,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 50,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 58,
    "end": 59
  },
  {
    "type": "RegularExpression",
    "value": "/[^[b\\q{xy}c]]/v",
    "regex": {
      "pattern": "[^[b\\q{xy}c]]",
      "flags": "v"
    },
    "start": 60,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77
  }
]
```
