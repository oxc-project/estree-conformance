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
            "name": "regexes",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RegExp",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 15,
                    "end": 21
                  },
                  "typeArguments": null,
                  "start": 15,
                  "end": 21
                },
                "start": 15,
                "end": 23
              },
              "start": 13,
              "end": 23
            },
            "start": 6,
            "end": 23
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": null,
                "raw": "/a{7,8}/",
                "regex": {
                  "pattern": "a{7,8}",
                  "flags": ""
                },
                "start": 29,
                "end": 37
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/a{9223372036854775807,9223372036854775808}/",
                "regex": {
                  "pattern": "a{9223372036854775807,9223372036854775808}",
                  "flags": ""
                },
                "start": 40,
                "end": 84
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/a{8,7}/",
                "regex": {
                  "pattern": "a{8,7}",
                  "flags": ""
                },
                "start": 87,
                "end": 95
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/a{9223372036854775808,9223372036854775807}/",
                "regex": {
                  "pattern": "a{9223372036854775808,9223372036854775807}",
                  "flags": ""
                },
                "start": 98,
                "end": 142
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/a{8,8}/",
                "regex": {
                  "pattern": "a{8,8}",
                  "flags": ""
                },
                "start": 145,
                "end": 153
              },
              {
                "type": "Literal",
                "value": null,
                "raw": "/a{9223372036854775808,9223372036854775808}/",
                "regex": {
                  "pattern": "a{9223372036854775808,9223372036854775808}",
                  "flags": ""
                },
                "start": 156,
                "end": 200
              }
            ],
            "start": 26,
            "end": 203
          },
          "definite": false,
          "start": 6,
          "end": 203
        }
      ],
      "declare": false,
      "start": 0,
      "end": 204
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 204
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
    "value": "regexes",
    "start": 6,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 15,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 26,
    "end": 27
  },
  {
    "type": "RegularExpression",
    "value": "/a{7,8}/",
    "regex": {
      "pattern": "a{7,8}",
      "flags": ""
    },
    "start": 29,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 37,
    "end": 38
  },
  {
    "type": "RegularExpression",
    "value": "/a{9223372036854775807,9223372036854775808}/",
    "regex": {
      "pattern": "a{9223372036854775807,9223372036854775808}",
      "flags": ""
    },
    "start": 40,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 84,
    "end": 85
  },
  {
    "type": "RegularExpression",
    "value": "/a{8,7}/",
    "regex": {
      "pattern": "a{8,7}",
      "flags": ""
    },
    "start": 87,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 95,
    "end": 96
  },
  {
    "type": "RegularExpression",
    "value": "/a{9223372036854775808,9223372036854775807}/",
    "regex": {
      "pattern": "a{9223372036854775808,9223372036854775807}",
      "flags": ""
    },
    "start": 98,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 142,
    "end": 143
  },
  {
    "type": "RegularExpression",
    "value": "/a{8,8}/",
    "regex": {
      "pattern": "a{8,8}",
      "flags": ""
    },
    "start": 145,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 153,
    "end": 154
  },
  {
    "type": "RegularExpression",
    "value": "/a{9223372036854775808,9223372036854775808}/",
    "regex": {
      "pattern": "a{9223372036854775808,9223372036854775808}",
      "flags": ""
    },
    "start": 156,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 203,
    "end": 204
  }
]
```
