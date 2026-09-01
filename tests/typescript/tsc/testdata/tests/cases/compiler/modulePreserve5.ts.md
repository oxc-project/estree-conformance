__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "data1",
            "optional": false,
            "typeAnnotation": null,
            "start": 7,
            "end": 12
          },
          "start": 7,
          "end": 12
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./data.json",
        "raw": "\"./data.json\"",
        "start": 18,
        "end": 31
      },
      "phase": null,
      "attributes": [
        {
          "type": "ImportAttribute",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 43
          },
          "value": {
            "type": "Literal",
            "value": "json",
            "raw": "\"json\"",
            "start": 45,
            "end": 51
          },
          "start": 39,
          "end": 51
        }
      ],
      "importKind": "value",
      "start": 0,
      "end": 54
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
            "name": "data2",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 66
          },
          "init": {
            "type": "AwaitExpression",
            "argument": {
              "type": "ImportExpression",
              "source": {
                "type": "Literal",
                "value": "./data.json",
                "raw": "\"./data.json\"",
                "start": 82,
                "end": 95
              },
              "options": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "with",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 99,
                      "end": 103
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "type",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 107,
                            "end": 111
                          },
                          "value": {
                            "type": "Literal",
                            "value": "json",
                            "raw": "\"json\"",
                            "start": 113,
                            "end": 119
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 107,
                          "end": 119
                        }
                      ],
                      "start": 105,
                      "end": 121
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 99,
                    "end": 121
                  }
                ],
                "start": 97,
                "end": 123
              },
              "phase": null,
              "start": 75,
              "end": 124
            },
            "start": 69,
            "end": 124
          },
          "definite": false,
          "start": 61,
          "end": 124
        }
      ],
      "declare": false,
      "start": 55,
      "end": 125
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 125
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "data1",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 13,
    "end": 17
  },
  {
    "type": "String",
    "value": "\"./data.json\"",
    "start": 18,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 32,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 39,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44
  },
  {
    "type": "String",
    "value": "\"json\"",
    "start": 45,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 55,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "data2",
    "start": 61,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 69,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 75,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 81,
    "end": 82
  },
  {
    "type": "String",
    "value": "\"./data.json\"",
    "start": 82,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "with",
    "start": 99,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 107,
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
    "value": "\"json\"",
    "start": 113,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  }
]
```
