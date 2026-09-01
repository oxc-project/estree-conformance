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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 10,
                      "end": 11
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 13,
                        "end": 19
                      },
                      "start": 11,
                      "end": 19
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 10,
                    "end": 19
                  }
                ],
                "start": 9,
                "end": 20
              },
              "start": 7,
              "end": 20
            },
            "start": 6,
            "end": 20
          },
          "init": {
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
                  "start": 29,
                  "end": 30
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 42,
                        "end": 43
                      },
                      "value": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 45,
                        "end": 47
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 42,
                      "end": 47
                    }
                  ],
                  "start": 32,
                  "end": 54
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 29,
                "end": 54
              }
            ],
            "start": 23,
            "end": 56
          },
          "definite": false,
          "start": 6,
          "end": 56
        }
      ],
      "declare": false,
      "start": 0,
      "end": 57
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 57
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
    "value": "x",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7,
    "end": 8
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 13,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 19,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 42,
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
    "value": "''",
    "start": 45,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 56,
    "end": 57
  }
]
```
